import Vehicles from "../model/vehicles.schema.js"


export const createCar = async (req, res) => {
    try {
        const { model, brand, luggage, images, seats, stock, doors, fuel, horsepower, engine, drive, cartype, gearbox, mileage, price } = req.body;

        const createCar = new Vehicles({
            model, brand, luggage, images, seats, doors, fuel, stock, horsepower, engine, drive, cartype, gearbox, mileage, price
        })
        await createCar.save()
        res.status(201).json({ message: "New Car Added", createCar })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const createBike = async (req, res) => {
    try {
        const { model, brand, images, seats, fuel, horsepower, engine, stock, gearbox, mileage, price } = req.body;

        const createCar = new Vehicles({
            model, brand, images, seats, fuel, horsepower, engine, stock, gearbox, mileage, price
        })
        await createCar.save()
        res.status(201).json({ message: "New Bike Added", createCar })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicles.find()

        res.status(200).json(vehicles)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicles.findOne({ _id: req.params.id })

        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicles.findOneAndDelete({ _id: req.params.id })

        res.status(200).json({ message: "Vehicles deleted", vehicle })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateCar = async (req, res) => {
    try {
        const { name, brand, luggage, images, seats, stock, doors, fuel, horsepower, engine, drive, cartype, gearbox, mileage, price } = req.body;

        const car = await Vehicles.findOneAndUpdate({ _id: req.params.id }, { name, brand, luggage, images, seats, stock, doors, fuel, horsepower, engine, drive, cartype, gearbox, mileage, price })

        res.status(200).json({ message: "Car changes save", car })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateBike = async (req, res) => {
    try {
        const { name, brand, images, seats, fuel, horsepower, engine, stock, gearbox, mileage, price } = req.bdoy;
        const car = await Vehicles.findOneAndUpdate({ _id: req.params.id }, { name, brand, images, seats, fuel, horsepower, engine, stock, gearbox, mileage, price })

        res.status(200).json({ message: "Car changes save", car })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
