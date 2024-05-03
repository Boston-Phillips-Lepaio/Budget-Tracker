export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('history').del()

  // Inserts seed entries
  await knex('history').insert([
    {
      id: 1,
      expense_id: 1,
      total_expense_id: 1,
      user_id: 1,
      expense_amount: 10,
      expense_date: '11/03/24',
      total_expense_amount: 100,
      total_expense_date: '11/03/2024',
      action: 'updated',
    },
    {
      id: 2,
      expense_id: 2,
      total_expense_id: 2,
      user_id: 2,
      expense_amount: 220,
      expense_date: '22/03/24',
      total_expense_amount: 2200,
      total_expense_date: '22/03/2024',
      action: 'added',
    },
    {
      id: 3,
      expense_id: 3,
      total_expense_id: 3,
      user_id: 3,
      expense_amount: 310,
      expense_date: '31/03/24',
      total_expense_amount: 3100,
      total_expense_date: '31/03/2024',
      action: 'updated',
    },
  ])
}
