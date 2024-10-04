import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import session from "express-session"
import cookieParser from "cookie-parser"

import vehicleRoute from "./routes/vehicles.route.js"
import userRoute from "./routes/user.route.js"
import orderRoute from "./routes/order.route.js"

const server = express()
dotenv.config()
server.use(express.json())
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.json())


const port = process.env.PORT
const db = process.env.MONGODB
const key = process.env.KEY
server.use(session({
    secret: key,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))


server.listen(port, () => {
    console.log(`Server started on port ${port}`)
    mongoose.connect(db).then(() => console.log("Database Connected Successfully")).catch((err) => console.log(err.message))
})

server.get("/", (req, res) => {
    res.status(200).send("It work")
})

server.use("/auth", userRoute)
server.use("/vehicles", vehicleRoute)
server.use("/orders", orderRoute)