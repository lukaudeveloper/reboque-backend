import User from '#models/user'
import Company from '#models/company'
import OtpToken from '#models/otp_token'
import { signupValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'
import { DateTime } from 'luxon'

function generateOtp(): string {
  return String(Math.floor(100000 + Math.random() * 900000))
}

export default class NewAccountController {
  async store({ request, serialize }: HttpContext) {
    const { firstName, lastName, phone, email, password, role, companyName, nif } =
      await request.validateUsing(signupValidator)

    const companyRoles = ['reboque', 'oficina', 'fornecedor'] as const
    const requiresCompany = companyRoles.includes(role as (typeof companyRoles)[number])

    if (requiresCompany && (!companyName || !nif)) {
      return serialize({ errors: [{ message: 'Nome da empresa e NIF são obrigatórios.' }] })
    }

    const user = await User.create({
      firstName,
      lastName,
      phone,
      email,
      password,
      role,
      status: 'active',
      isVerified: false,
    })

    if (requiresCompany) {
      await Company.create({
        ownerId: user.id,
        name: companyName!,
        nif: nif!,
        type: role as 'reboque' | 'oficina' | 'fornecedor',
      })
    }

    const code = generateOtp()
    await OtpToken.create({
      userId: user.id,
      code,
      type: 'email_verification',
      expiresAt: DateTime.now().plus({ minutes: 15 }),
    })

    // Em produção: enviar código por SMS/email
    // Em desenvolvimento: exposto nos logs do servidor
    console.log(`[OTP] Utilizador ${email} → código: ${code}`)

    const token = await User.accessTokens.create(user)

    return serialize({
      user: UserTransformer.transform(user),
      token: token.value!.release(),
    })
  }
}
