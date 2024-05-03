import { Router } from 'express'
import * as db from '../db/dbFunctions'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const expenses = await db.getExpense()
    res.json(expenses)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router
