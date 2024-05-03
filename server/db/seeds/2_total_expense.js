export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('total_expense').del()

  // Inserts seed entries
  await knex('total_expense').insert([
    {
      id: 1,
      week_start_date: '04/03/2024',
      week_end_date: '10/03/2024',
      amount: 100,
      user_id: 1,
    },
    {
      id: 2,
      week_start_date: '11/03/2024',
      week_end_date: '17/03/2024',
      amount: 200,
      user_id: 2,
    },
    {
      id: 3,
      week_start_date: '18/03/2024',
      week_end_date: '24/03/2024',
      amount: 300,
      user_id: 3,
    },
  ])
}
