export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('bio')
    table.string('date_joined')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
