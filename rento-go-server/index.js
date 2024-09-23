import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import vehicleRoute from "./routes/vehicles.route.js"
// import userRoute from "./routes/user.route.js"

const server = express()
dotenv.config()

const port = process.env.PORT
const db = process.env.MONGODB

server.listen(port, () => {
    console.log("Server started")
    mongoose.connect(db).then(() => console.log("Database Connected Successfully")).catch((err) => console.log(err.message))
})

server.use("/", (req, res) => {
    res.status(200).send("It work")
})

// server.use("/auth", userRoute)
server.use("/vehicles", vehicleRoute)