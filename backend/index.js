import express from "express" //creating a server using express
import dotenv from "dotenv"
import cors from "cors"
import http from "http"

import authRoute from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoute.js"
import userRoute from "./routes/userRoute.js"

import { conntoMONGO_DB } from "./db/conn.js"
import cookieParser from "cookie-parser"
import { app,server } from "./sockets/socket.js"


const PORT=8000 

dotenv.config()
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))

//ORDER OF USING THIS MIDDLEWARE MATTERS !!!!!
app.use(cookieParser())
app.use(express.json()) //to extract the given fields from req.body i.e parse incoming reqs with json payloads
app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)
app.use("/api/users",userRoute)


conntoMONGO_DB(process.env.MONGO_URL).
then(()=>console.log('MONGO_DB connected successfully !!'))

server.listen(PORT,()=>console.log(`Listening on port ${PORT}`))
