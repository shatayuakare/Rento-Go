import express from "express";
import { createBike, createCar, deleteVehicle, getVehicle, getVehicles, updateBike, updateCar } from "../controller/vehicles.controller.js";

const vehicleRoute = express()

vehicleRoute.use("/", getVehicles)
vehicleRoute.use("/:id", getVehicle)
vehicleRoute.use("/newCar", createCar)
vehicleRoute.use("/newBike", createBike
)
vehicleRoute.use("/delete/:id", deleteVehicle)
vehicleRoute.use("/updateCar/:id", updateCar)
vehicleRoute.use("/updateBike/:id", updateBike)


export default vehicleRoute