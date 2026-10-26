import { VehicleDocumentSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Vehicle from '#models/vehicle'

export default class VehicleDocument extends VehicleDocumentSchema {
  static table = 'vehicle_documents'

  @belongsTo(() => Vehicle, { foreignKey: 'vehicleId' })
  declare vehicle: BelongsTo<typeof Vehicle>
}
