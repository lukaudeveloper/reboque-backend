import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vehicle_documents'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('status', ['pending', 'approved', 'rejected']).defaultTo('pending').notNullable()
      table.string('rejection_reason', 500).nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('status')
      table.dropColumn('rejection_reason')
    })
  }
}
