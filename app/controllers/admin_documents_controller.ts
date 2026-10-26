import VehicleDocument from '#models/vehicle_document'
import type { HttpContext } from '@adonisjs/core/http'

export default class AdminDocumentsController {
  private guard({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    if (user.role !== 'admin') {
      response.forbidden({ message: 'Acesso reservado a administradores.' })
      return null
    }
    return user
  }

  async index({ auth, response, serialize }: HttpContext) {
    if (!this.guard({ auth, response } as HttpContext)) return

    const docs = await VehicleDocument.query()
      .preload('vehicle', (q) => q.preload('owner'))
      .orderBy('created_at', 'asc')

    return serialize(
      docs.map((d) => ({
        ...d.serialize(),
        vehicle: {
          id: d.vehicle.id,
          brand: d.vehicle.brand,
          plate: d.vehicle.plate,
          year: d.vehicle.year,
        },
        user: {
          id: d.vehicle.owner.id,
          firstName: d.vehicle.owner.firstName,
          lastName: d.vehicle.owner.lastName,
          email: d.vehicle.owner.email,
        },
      }))
    )
  }

  async approve({ auth, params, response, serialize }: HttpContext) {
    if (!this.guard({ auth, response } as HttpContext)) return

    const doc = await VehicleDocument.findOrFail(params.id)
    doc.status = 'approved'
    doc.rejectionReason = null
    await doc.save()
    return serialize(doc.serialize())
  }

  async reject({ auth, params, request, response, serialize }: HttpContext) {
    if (!this.guard({ auth, response } as HttpContext)) return

    const doc = await VehicleDocument.findOrFail(params.id)
    doc.status = 'rejected'
    doc.rejectionReason = request.input('reason', null)
    await doc.save()
    return serialize(doc.serialize())
  }
}
