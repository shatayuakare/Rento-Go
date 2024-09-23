import express from "express";
import { login, register } from "../controller/user.controller.js";

const userRoute = express.Router()

// userRoute.use("/")

userRoute.use("/login", login)
userRoute.use("/register", register)

export default userRoute