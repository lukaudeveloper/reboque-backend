import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vehicle_documents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('vehicle_id').unsigned().notNullable()
        .references('id').inTable('vehicles').onDelete('CASCADE')
      table.string('label', 200).notNullable()
      table.string('file_name', 255).notNullable()
      table.string('file_path', 500).notNullable()
      table.string('mime_type', 100).nullable()
      table.integer('size').unsigned().nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
