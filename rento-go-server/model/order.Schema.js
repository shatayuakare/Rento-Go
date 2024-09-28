import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    vehicleName: {
        type: String,
        required: true
    },
    pickUpLocation: {
        type: String,
        required: true
    },
    pickDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
    },
    payment: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    VID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicles"
    },
    UID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const Orders = mongoose.model("orders", orderSchema)
export default Orders