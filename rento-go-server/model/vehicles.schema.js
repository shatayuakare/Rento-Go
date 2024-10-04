import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    seats: {
        type: Number,
        required: true
    },
    luggage: {
        type: Number,
    },
    doors: {
        type: Number,
    },
    fuel: {
        type: String,
        required: true
    },
    horsepower: {
        type: Number,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    cartype: {
        type: String
    },
    drive: {
        type: String,
        default: 'fwd'
    },
    gearbox: {
        type: Number,
    },
    stock: {
        type: Number,
    },
    mileage: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "ready"
    },
})

const Vehicles = mongoose.model("vehicles", vehicleSchema)

export default Vehicles