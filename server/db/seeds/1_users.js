export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, name: 'boston', bio: 'this is a bio', date_joined: '01/01/2000' },
    { id: 2, name: 'joe', bio: 'this is a bio 1', date_joined: '01/01/2001' },
    { id: 3, name: 'john', bio: 'this is a bio 2', date_joined: '02/02/2002' },
    { id: 4, name: 'james', bio: 'this is a bio 3', date_joined: '03/03/2003' },
    {
      id: 5,
      name: 'jerry',
      bio: 'this is a bio 4',
      date_joined: '04/04/2004',
    },
  ])
}
