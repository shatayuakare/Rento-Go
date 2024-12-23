import express from "express";
import { createBike, createCar, deleteVehicle, getVehicle, getVehicles, updateBike, updateCar, vehicleStatus } from "../controller/vehicles.controller.js";

const vehicleRoute = express.Router()

vehicleRoute.get("/", getVehicles)
vehicleRoute.get("/:id", getVehicle)
vehicleRoute.post("/newCar", createCar)
vehicleRoute.post("/newBike", createBike)

vehicleRoute.delete("/delete/:id", deleteVehicle)
vehicleRoute.put("/updateCar/:id", updateCar)
vehicleRoute.put("/updateBike/:id", updateBike)
vehicleRoute.put("/status/:id", vehicleStatus)


export default vehicleRoute