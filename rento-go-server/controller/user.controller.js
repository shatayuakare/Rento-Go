import Users from "../model/user.schema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const key = process.env.KEY


export const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        if (!users) return res.status(404).json({ message: "Data not founnd" });

        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(({ message: error.message }))
    }
}


export const userInfo = async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.params.id })
        if (!user) return res.status(404).json({ message: "User not found" })

        const data = user.toObject();
        delete data.password

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email })
        const isValid = await bcrypt.compare(password, user.password)

        if (!user || !isValid) return res.status(400).json({ message: "Email or password incorrect" })
        const userObject = user.toObject();
        delete userObject.password;

        req.session.token = jwt.sign({ userObject }, key)
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
        const decode = jwt.verify(token, key)
        console.log(token)
        const user = await Users.findOne({ email: decode.user.email }).select("-password")

        if (!user) return res.status(401).json({ message: "Unauthroised Access" })

        req.user = user
        next()
    } catch (error) {
        res.status(400).json(error.message)
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
        const userObject = createUser.toObject();
        delete userObject.password;

        req.session.token = jwt.sign({ userObject }, key)
        res.status(201).json({
            message: "Account Register",
            token: req.session.token
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const adminLogin = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await Users.findOne({ email })

        if (user) return res.status(200).json({ message: `${user.name} already exist` })

        const createAdmin = new Users({
            name, email, password, admin: true
        })

        await createAdmin.save()
        const adminObj = createAdmin.toObject()
        delete adminObj.password

        res.status(201).json({
            message: "Admin register"
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
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

export const updateData = async (req, res) => {
    try {
        const id = req.params.id
        const { name, phone } = req.body;

        const user = await Users.findOneAndUpdate({ _id: id }, {
            name, phone
        })

        if (!user) return res.status(404).json({ message: "user not found" });

        res.status(200).json({ message: "Data changing accept" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const updateImage = async (req, res) => {
    try {
        const id = req.params.id;
        const { img } = req.body;

        const user = await Users.findOneAndUpdate(
            { _id: id },
            { $set: { img } },
            { new: true, upsert: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ message: "User not found" })

        res.status(200).json({ message: "Profile Picture update Successfully" })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updatePassword = async (req, res) => {
    try {
        const id = req.params.id;
        const { oldPassword, newPassword } = req.body;

        const user = await Users.findOne({ _id: id })

        const ismatch = await bcrypt.compare(oldPassword, user.password)

        if (!ismatch) return res.status(401).json({ message: "Password not match" })

        const hash = await bcrypt.hash(newPassword, 10)
        user.password = hash;
        await user.save();

        res.status(200).json({ message: "Password changed" })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const forgotPassword = async (req, res) => {
    try {
        const { email, name } = req.body;

        const user = await Users.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" })

        const pass = "PASSWORD123";

        const hash = await bcrypt.hash(pass, 10);
        user.password = hash;
        await user.save();

        res.status(200).json({ message: `${name}'s your password is ${pass}` });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const reLogin = async (req, res) => {
    try {
        const token = req.params.token;

        const data = jwt.verify(token, key);
        const id = data.userObject._id;

        const user = await Users.findOne({ _id: id });
        if (!user) return res.status(404).json({ message: "User not found" });

        const userObject = user.toObject();
        delete userObject.password;

        req.session.token = jwt.sign({ userObject }, key)
        res.status(200).json({ message: "Account Loged In", token: req.session.token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const adminDeleteUser = async (req, res) => {
    try {
        const user = await Users.findOneAndDelete({ _id: req.params.id })
        if (!user) return res.status(404).json({ message: "User not Found" })

        res.status(200).json({ message: "User Deleted", user });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
