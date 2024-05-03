import express from 'express'
import * as Path from 'node:path'

import usersRoutes from './routes/usersRoutes.ts'
import expenseRoutes from './routes/expenseRoutes.ts'
import historyRoutes from './routes/historyRoutes.ts'
import totalExpenseRoutes from './routes/totalExpenseRoutes.ts'

const server = express()

server.use(express.json())

// API Routes
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/expenses', expenseRoutes)
server.use('/api/v1/totalexpenses', historyRoutes)
server.use('/api/v1/histories', totalExpenseRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
