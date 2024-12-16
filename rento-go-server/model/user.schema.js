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
    OID: [ // order id
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orders'
        }
    ],
    // CID: [ // Coupone Id
    //     {
    //         type: String,
    //     }
    // ],
    VID: [ // Vehicle id 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'vehicles'
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

const Users = mongoose.model("users", userSchama);

export default Users