import express from "express";
import { deleteUser, login, register } from "../controller/user.controller.js";

const userRoute = express.Router()

userRoute.get("/", (req, res) => {
    // try {
    //     const users = 
    // } catch (error) {
    //     res.status(400)
    // }
})

userRoute.post("/login", login)
userRoute.post("/register", register)
userRoute.delete("/delete/", deleteUser)

export default userRoute