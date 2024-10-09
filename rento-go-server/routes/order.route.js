import express from "express";
import { cancelOrder, getOrder, getOrders, makeOrder, updateOrder } from "../controller/order.controller.js";

const orderRoute = express.Router()

orderRoute.get("/", getOrders)
orderRoute.get("/:id", getOrder)
orderRoute.get("/cancel/:id", cancelOrder)
orderRoute.post("/new", makeOrder)
orderRoute.post("/update/:id", updateOrder)

export default orderRoute
