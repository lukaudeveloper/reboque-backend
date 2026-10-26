import vine from '@vinejs/vine'

const email = () => vine.string().email().maxLength(254)
const password = () => vine.string().minLength(8).maxLength(72)

export const signupValidator = vine.create({
  firstName: vine.string().trim().minLength(2).maxLength(100),
  lastName: vine.string().trim().minLength(2).maxLength(100),
  phone: vine.string().trim().maxLength(30).optional(),
  email: email().unique({ table: 'users', column: 'email' }),
  password: password(),
  passwordConfirmation: password().sameAs('password'),
  role: vine.enum(['cliente', 'reboque', 'oficina', 'fornecedor']),
  companyName: vine.string().trim().minLength(2).maxLength(200).optional(),
  nif: vine
    .string()
    .trim()
    .maxLength(20)
    .unique({ table: 'companies', column: 'nif' })
    .optional(),
})

export const loginValidator = vine.create({
  email: email(),
  password: vine.string(),
})

export const verifyOtpValidator = vine.create({
  code: vine.string().fixedLength(6),
})

export const updateProfileValidator = vine.create({
  firstName: vine.string().trim().minLength(2).maxLength(100).optional(),
  lastName: vine.string().trim().minLength(2).maxLength(100).optional(),
  phone: vine.string().trim().maxLength(30).optional(),
})
