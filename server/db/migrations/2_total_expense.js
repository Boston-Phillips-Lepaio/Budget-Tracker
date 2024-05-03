export async function up(knex) {
  return knex.schema.createTable('total_expense', (table) => {
    table.increments('id').primary()
    table.string('week_start_date')
    table.string('week_end_date')
    table.integer('amount')
    table.integer('user_id').references('users.id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('total_expense')
}
