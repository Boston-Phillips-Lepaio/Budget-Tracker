export interface Fruit {
  id: number
  name: string
}

export interface FruitData {
  name: string
}

export interface User {
  id: number
  name: string
  bio: string
  date_joined: string
}

export interface Expense {
  id: number
  expense: string
  amount: number
  total_expense_id: number
  user_id: number
  date: string
}

export interface TotalExpense {
  id: number
  week_start_date: string
  week_end_date: string
  amount: number
  user_id: number
}

export interface History {
  id: number
  expense_id: number
  total_expense_id: number
  user_id: number
  expense_amount: number
  expense_date: string
  total_expense_amount: number
  total_expense_date: string
  action: string
}
