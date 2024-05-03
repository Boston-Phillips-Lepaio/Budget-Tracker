import { Router } from 'express'
import * as db from '../db/dbFunctions'

const router = Router()

// GET /api/v1/users

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json(users)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// GET /api/v1/users/:id

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const users = await db.getUsersById(id)
    res.json(users)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// POST /api/v1/users

router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    await db.addUser(newUser)
    res.sendStatus(200)
  } catch (error) {
    console.error(`error on ${error}`)
    res.sendStatus(500)
  }
})

// DELETE /api/v1/users/:id

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteUser(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`error on ${error}`)
    res.sendStatus(500)
  }
})

// PATCH /api/v1/users/:id

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { bio } = req.body
    await db.updateUserBio(id, bio)
    res.sendStatus(204)
  } catch (error) {
    console.error(`error on ${error}`)
    res.sendStatus(500)
  }
})

export default router
