import express from "express";
import { adminDeleteUser, deleteUser, forgotPassword, getUsers, login, register, reLogin, updateData, updateImage, updatePassword, userInfo } from "../controller/user.controller.js";

const userRoute = express.Router()

userRoute.get("/", getUsers)
userRoute.get("/:id", userInfo)

userRoute.post("/login", login)
userRoute.post("/relogin/:token", reLogin)
userRoute.post("/register", register)
userRoute.delete("/delete/:id", deleteUser)
userRoute.delete("/adelete/:id", adminDeleteUser)


userRoute.put("/newpassword/:id", updatePassword)
userRoute.put("/update/:id", updateData)
userRoute.put("/profile/:id", updateImage)
userRoute.put("/forgotpassword/", forgotPassword)


export default userRoute