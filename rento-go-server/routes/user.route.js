import express from "express";
import { deleteUser, login, register, userInfo } from "../controller/user.controller.js";

const userRoute = express.Router()

userRoute.get("/:id", userInfo)

userRoute.post("/login", login)
userRoute.post("/register", register)
userRoute.delete("/delete/", deleteUser)

export default userRoute