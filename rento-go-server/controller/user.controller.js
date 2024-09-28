import Users from "../model/user.schema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const key = process.env.KEY

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email })
        const isValid = bcrypt.compare(password, user.password)

        if (!user || !isValid) return res.status(401).json({ message: "Email or password incorrect" })
        const userObject = user.toObject();

        delete userObject.password;

        req.session.token = jwt.sign({ user: userObject }, key)
        res.status(200).json({ message: "Account Loged In", token: req.session.token })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookie.token;
        if (!token) return res.status(403).json({ message: "You have no permission, Please Login" });


        // console.log(token)
        const decode = jwt.verify(token, "secret")
        console.log(token)
        const user = await Users.findOne({ email: decode.user.email }).select("-password")

        if (!user) return res.status(404).json({ message: "Unauthroised Access" })

        req.user = user
        next()
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const register = async (req, res) => {
    try {
        const { name, email, password, admin } = req.body;

        const user = await Users.findOne({ email })
        if (user) return res.status(200).json({ message: "Already Registered" })

        const hash = await bcrypt.hash(password, 10)

        let createUser;

        if (admin) {
            createUser = new Users({
                name, email, admin, password: hash
            })
        } else {
            createUser = new Users({
                name, email, password: hash
            })
        }


        await createUser.save()
        const userObject = user.toObject();

        delete userObject.password;

        req.session.token = jwt.sign({ user: userObject }, key)
        res.status(201).json({
            message: "Accound Registered",
            token: req.session.token
        })
    } catch (error) {
    }
}


export const deleteUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email })
        if (!user) return res.status(404).json({ message: "Account already Deleted" })
        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) return res.status(503).json({ message: "Unauthorized access" })

        await Users.findOneAndDelete({ email }).then(() =>
            res.status(200).json({ message: "Account Deleted", user })
        ).catch(err => res.status(400).json({ message: err.message }))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}