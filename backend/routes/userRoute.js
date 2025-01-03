import express from 'express'
import { getUsers } from '../controllers/user.js'
import protectRoute from '../middlewares/auth.js'

const router=express.Router()

//only logged-in user can access users so we use the protectRoute middleware
router.get("/",protectRoute,getUsers)

export default router
