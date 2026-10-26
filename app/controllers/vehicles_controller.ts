import Vehicle from '#models/vehicle'
import { vehicleValidator, updateVehicleValidator } from '#validators/vehicle'
import type { HttpContext } from '@adonisjs/core/http'

export default class VehiclesController {
  async index({ auth, serialize }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicles = await Vehicle.query()
      .where('user_id', user.id)
      .preload('documents', (q) => q.select('id', 'vehicle_id', 'status'))
      .orderBy('created_at', 'desc')
    return serialize(vehicles.map((v) => ({
      ...v.serialize(),
      approvedDocumentsCount: v.documents.filter((d) => d.status === 'approved').length,
      pendingDocumentsCount: v.documents.filter((d) => d.status === 'pending').length,
    })))
  }

  async store({ auth, request, serialize }: HttpContext) {
    const user = auth.getUserOrFail()
    const data = await request.validateUsing(vehicleValidator)
    const vehicle = await Vehicle.create({ userId: user.id, ...data })
    return serialize(vehicle.serialize())
  }

  async show({ auth, params, serialize, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicle = await Vehicle.query().where('id', params.id).where('user_id', user.id).first()
    if (!vehicle) return response.notFound({ message: 'Veículo não encontrado.' })
    return serialize(vehicle.serialize())
  }

  async update({ auth, params, request, serialize, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicle = await Vehicle.query().where('id', params.id).where('user_id', user.id).first()
    if (!vehicle) return response.notFound({ message: 'Veículo não encontrado.' })
    const data = await request.validateUsing(updateVehicleValidator)
    vehicle.merge(data)
    await vehicle.save()
    return serialize(vehicle.serialize())
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicle = await Vehicle.query().where('id', params.id).where('user_id', user.id).first()
    if (!vehicle) return response.notFound({ message: 'Veículo não encontrado.' })
    await vehicle.delete()
    return response.noContent()
  }
}
