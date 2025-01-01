import express from "express" //creating a server using express
import dotenv from "dotenv"

import authRoute from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoute.js"

import { conntoMONGO_DB } from "./db/conn.js"
import cookieParser from "cookie-parser"

const app=express()
const PORT=8000 || process.env.PORT;

dotenv.config()

//ORDER OF USING THIS MIDDLEWARE MATTERS !!!!!
app.use(cookieParser())
app.use(express.json()) //to extract the given fields from req.body i.e parse incoming reqs with json payloads
<<<<<<< HEAD

=======
// app.use(checkCookieandUser("token"))
>>>>>>> a64f282d048168f62bf354deb61749e5f5c08079
app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)


conntoMONGO_DB(process.env.MONGO_URL).
then(()=>console.log('MONGO_DB connected successfully !!'))

app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))
