import express from "express";
import { deleteUser, forgotPassword, getUsers, login, register, updateData, updateImage, updatePassword, userInfo } from "../controller/user.controller.js";

const userRoute = express.Router()

userRoute.get("/", getUsers)
userRoute.get("/:id", userInfo)

userRoute.post("/login", login)
userRoute.post("/register", register)
userRoute.delete("/delete/:id", deleteUser)


userRoute.put("/newpassword/:id", updatePassword)
userRoute.put("/update/:id", updateData)
userRoute.put("/profile/:id", updateImage)
userRoute.put("/forgotpassword/", forgotPassword)


export default userRoute