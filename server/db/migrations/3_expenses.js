export async function up(knex) {
  return knex.schema.createTable('expenses', (table) => {
    table.increments('id').primary()
    table.string('expense')
    table.integer('cost')
    table.integer('total_expense_id').references('total_expense.id')
    table.integer('user_id').references('users.id')
    table.string('date')
    table.string('time')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('expenses')
}
