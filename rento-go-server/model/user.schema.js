import mongoose from "mongoose"

const userSchama = new mongoose.Schema({
    img: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    order: [
        {
            type: String,
        }
    ],
    coupons: [
        {
            type: String,
        }
    ],
    phone: {
        type: String
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