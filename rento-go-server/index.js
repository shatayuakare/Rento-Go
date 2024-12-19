import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import session from "express-session"
import cookieParser from "cookie-parser"
// import nodemailer from "nodemailer"

import vehicleRoute from "./routes/vehicles.route.js"
import userRoute from "./routes/user.route.js"
import orderRoute from "./routes/order.route.js"
import contactRoute from "./routes/contact.route.js"

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

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for port 465, false for other ports
//     auth: {
//         user: "maddison53@ethereal.email",
//         pass: "jn7jnAPss4f63QBp6D",
//     },
// });


// const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "tagec88832@evusd.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// });

// console.log("Message sent: %s", info.messageId);


server.listen(port, () => {
    console.log(`Server started on port ${port}`)
    mongoose.connect(db).then(() => console.log("Database Connected Successfully")).catch((err) => console.log(err.message))
})

server.get("/", (req, res) => {
    res.status(200).send(`Server working on ${port}`)
})

server.use("/auth", userRoute)
server.use("/vehicles", vehicleRoute)
server.use("/contacts", contactRoute)
server.use("/orders", orderRoute)