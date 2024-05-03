export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('expenses').del()

  // Inserts seed entries
  await knex('expenses').insert([
    {
      id: 1,
      expense: 'food',
      cost: 12,
      total_expense_id: 1,
      user_id: 1,
      date: '30/03/2024',
      time: '19:25',
    },
    {
      id: 2,
      expense: 'gas',
      cost: 22,
      total_expense_id: 2,
      user_id: 2,
      date: '30/03/2024',
      time: '13:15',
    },
    {
      id: 3,
      expense: 'clothes',
      cost: 32,
      total_expense_id: 3,
      user_id: 3,
      date: '30/03/2024',
      time: '10:20',
    },
  ])
}
