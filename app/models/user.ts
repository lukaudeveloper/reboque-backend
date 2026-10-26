import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { type AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Company from '#models/company'

export type UserRole = 'cliente' | 'oficina' | 'reboque' | 'fornecedor' | 'admin'
export type UserStatus = 'pending' | 'active' | 'suspended'

export default class User extends compose(UserSchema, withAuthFinder(hash)) {
  static accessTokens = DbAccessTokensProvider.forModel(User)
  declare currentAccessToken?: AccessToken

  @hasOne(() => Company, { foreignKey: 'ownerId' })
  declare company: HasOne<typeof Company>

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
