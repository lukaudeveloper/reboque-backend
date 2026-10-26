import { VehicleSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import VehicleDocument from '#models/vehicle_document'

export default class Vehicle extends VehicleSchema {
  @belongsTo(() => User, { foreignKey: 'userId' })
  declare owner: BelongsTo<typeof User>

  @hasMany(() => VehicleDocument, { foreignKey: 'vehicleId' })
  declare documents: HasMany<typeof VehicleDocument>
}
