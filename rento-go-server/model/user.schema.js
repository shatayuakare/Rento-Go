import mongoose from "mongoose"

const userSchama = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }
})

const Users = mongoose.model("users", userSchama)
export default Users