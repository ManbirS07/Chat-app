import express from "express"
import { sendMessage,getMessage } from "../controllers/message.js"
import protectRoute from "../middlewares/auth.js"

const router=express.Router()

//to get messages btw current user and another user
router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)

export default router