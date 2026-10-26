import { OtpTokenSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import { DateTime } from 'luxon'

export type OtpType = 'email_verification' | 'password_reset'

export default class OtpToken extends OtpTokenSchema {
  @belongsTo(() => User, { foreignKey: 'userId' })
  declare user: BelongsTo<typeof User>

  get isExpired(): boolean {
    return this.expiresAt < DateTime.now()
  }

  get isUsed(): boolean {
    return this.usedAt !== null
  }
}
