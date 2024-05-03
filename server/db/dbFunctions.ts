import connection from './connection.ts'
const db = connection
import { User, Expense, TotalExpense, History } from '../../models/models.ts'

// USER FUNCTIONS

export function getUsers(): Promise<User[]> {
  return db('users').select()
}

export function getUsersById(id: number): Promise<User> {
  return db('users').where({ id }).select().first()
}

export function addUser(newUser: User) {
  return db('users').insert(newUser)
}

export function deleteUser(id: number): Promise<User> {
  return db('users').where({ id }).delete()
}

export function updateUserBio(id: number, bio: string) {
  return db('users').where({ id }).update({ bio: bio })
}

// TOTAL EXPENSE FUNCTIONS

export function getTotalExpense(): Promise<TotalExpense[]> {
  return db('total_expense').select()
}

// EXPENSE FUNCTIONS

export function getExpense(): Promise<Expense[]> {
  return db('expenses').select()
}

// HISTORY FUNCTIONS

export function getHistory(): Promise<History[]> {
  return db('history').select()
}
