export async function up(knex) {
  return knex.schema.createTable('history', (table) => {
    table.increments('id').primary()
    table.integer('expense_id').references('expenses.id')
    table.integer('total_expense_id').references('total_expense.id')
    table.integer('user_id').references('users.id')
    table.integer('expense_amount')
    table.string('expense_date')
    table.integer('total_expense_amount')
    table.string('total_expense_date')
    table.string('action')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('history')
}
