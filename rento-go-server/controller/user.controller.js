import Users from "../model/user.schema.js"
import bcrypt from "bcryptjs"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email })
        const isValid = bcrypt.compare(password, user.password)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await Users.findOne({ email })
        if (user) return res.status(200).json({ message: "Already Registered" })

        const hash = await bcrypt.hash(password, 10)

        const createUser = new Users({
            name, email, password: hash
        })

        await createUser.save()
        res.status(201).json({
            message: "Accound Registerd",
            name, email
        })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


