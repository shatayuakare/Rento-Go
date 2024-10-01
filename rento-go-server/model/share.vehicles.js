import mongoose from "mongoose";

const shareVehicleSchema = new mongoose.Schema({
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
    zip: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    quantity: {
        type: Number,
        default: 1
    },
    vehicleName: {
        type: String,
        required: true
    },
    vehicleModel: {
        type: String,
        required: true
    },
    vehicleBrand: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const shareVehicles = mongoose.model("shareVehicles", shareVehicleSchema)

export default shareVehicles