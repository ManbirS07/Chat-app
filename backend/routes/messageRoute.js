import express from "express"
import { sendMessage } from "../controllers/message.js"
import protectRoute from "../middlewares/auth.js"

const router=express.Router()

router.post("/send/:id",protectRoute,sendMessage)

export default router