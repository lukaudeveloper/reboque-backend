import { mkdir } from 'node:fs/promises'
import { unlink } from 'node:fs/promises'
import app from '@adonisjs/core/services/app'
import Vehicle from '#models/vehicle'
import VehicleDocument from '#models/vehicle_document'
import type { HttpContext } from '@adonisjs/core/http'

const ALLOWED_EXTNAMES = new Set(['pdf', 'jpg', 'jpeg', 'png', 'webp'])
const MAX_SIZE = '10mb'

export default class VehicleDocumentsController {
  private async getVehicle(userId: number, vehicleId: string) {
    return Vehicle.query().where('id', vehicleId).where('user_id', userId).firstOrFail()
  }

  async index({ auth, params, response, serialize }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicle = await this.getVehicle(user.id, params.vehicleId).catch(() => null)
    if (!vehicle) return response.notFound({ message: 'Veículo não encontrado.' })

    const docs = await VehicleDocument.query()
      .where('vehicle_id', vehicle.id)
      .orderBy('created_at', 'asc')
    return serialize(docs.map((d) => d.serialize()))
  }

  async store({ auth, params, request, response, serialize }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicle = await this.getVehicle(user.id, params.vehicleId).catch(() => null)
    if (!vehicle) return response.notFound({ message: 'Veículo não encontrado.' })

    const label = request.input('label', '').trim() || 'Documento'

    const file = request.file('document', { size: MAX_SIZE })
    if (!file) return response.unprocessableEntity({ message: 'Ficheiro em falta.' })
    if (!file.isValid) return response.unprocessableEntity({ message: file.errors[0]?.message ?? 'Ficheiro inválido.' })

    const ext = file.clientName?.split('.').pop()?.toLowerCase() ?? ''
    if (!ALLOWED_EXTNAMES.has(ext)) {
      return response.unprocessableEntity({ message: `Tipo de ficheiro não permitido. Use: ${[...ALLOWED_EXTNAMES].join(', ')}.` })
    }

    const uploadDir = app.makePath('storage', 'uploads', 'vehicles', String(vehicle.id))
    await mkdir(uploadDir, { recursive: true })

    const storedName = `${Date.now()}_${file.clientName}`
    await file.move(uploadDir, { name: storedName, overwrite: false })

    const relativePath = `storage/uploads/vehicles/${vehicle.id}/${storedName}`
    const doc = await VehicleDocument.create({
      vehicleId: vehicle.id,
      label,
      fileName: file.clientName!,
      filePath: relativePath,
      mimeType: file.type ? `${file.type}/${file.subtype}` : null,
      size: file.size ?? null,
    })

    return serialize(doc.serialize())
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicle = await this.getVehicle(user.id, params.vehicleId).catch(() => null)
    if (!vehicle) return response.notFound({ message: 'Veículo não encontrado.' })

    const doc = await VehicleDocument.query()
      .where('id', params.id)
      .where('vehicle_id', vehicle.id)
      .first()
    if (!doc) return response.notFound({ message: 'Documento não encontrado.' })

    await unlink(app.makePath(doc.filePath)).catch(() => {})
    await doc.delete()
    return response.noContent()
  }

  async download({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const vehicle = await this.getVehicle(user.id, params.vehicleId).catch(() => null)
    if (!vehicle) return response.notFound({ message: 'Veículo não encontrado.' })

    const doc = await VehicleDocument.query()
      .where('id', params.id)
      .where('vehicle_id', vehicle.id)
      .first()
    if (!doc) return response.notFound({ message: 'Documento não encontrado.' })

    return response.download(app.makePath(doc.filePath), doc.fileName)
  }
}
