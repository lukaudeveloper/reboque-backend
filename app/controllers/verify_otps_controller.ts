import OtpToken from '#models/otp_token'
import { verifyOtpValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'
import { DateTime } from 'luxon'

export default class VerifyOtpsController {
  async store({ request, auth, serialize, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const { code } = await request.validateUsing(verifyOtpValidator)

    if (user.isVerified) {
      return serialize({ user: UserTransformer.transform(user) })
    }

    const otp = await OtpToken.query()
      .where('user_id', user.id)
      .where('type', 'email_verification')
      .whereNull('used_at')
      .orderBy('created_at', 'desc')
      .first()

    if (!otp) {
      return response.unprocessableEntity({ errors: [{ message: 'Código inválido ou expirado.' }] })
    }

    if (otp.isExpired) {
      return response.unprocessableEntity({ errors: [{ message: 'Código expirado. Solicite um novo.' }] })
    }

    if (otp.code !== code) {
      return response.unprocessableEntity({ errors: [{ message: 'Código incorrecto.' }] })
    }

    otp.usedAt = DateTime.now()
    await otp.save()

    user.isVerified = true
    await user.save()

    return serialize({ user: UserTransformer.transform(user) })
  }

  async resend({ auth, serialize }: HttpContext) {
    const user = auth.getUserOrFail()

    if (user.isVerified) {
      return serialize({ message: 'Conta já verificada.' })
    }

    const code = String(Math.floor(100000 + Math.random() * 900000))
    await OtpToken.create({
      userId: user.id,
      code,
      type: 'email_verification',
      expiresAt: DateTime.now().plus({ minutes: 15 }),
    })

    console.log(`[OTP] Reenvio para ${user.email} → código: ${code}`)

    return serialize({ message: 'Código reenviado.' })
  }
}
