import vine from '@vinejs/vine'

const currentYear = new Date().getFullYear()

export const vehicleValidator = vine.create({
  brand: vine.string().trim().minLength(2).maxLength(150),
  plate: vine.string().trim().toUpperCase().maxLength(20),
  year: vine.number().min(1970).max(currentYear + 1),
  vin: vine.string().trim().fixedLength(17).optional(),
})

export const updateVehicleValidator = vine.create({
  brand: vine.string().trim().minLength(2).maxLength(150).optional(),
  plate: vine.string().trim().toUpperCase().maxLength(20).optional(),
  year: vine.number().min(1970).max(currentYear + 1).optional(),
  vin: vine.string().trim().fixedLength(17).optional(),
})
