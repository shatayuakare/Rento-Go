import express from "express";
import { deleteOrder, getOrder, getOrders, makeOrder, orderStatus, updateOrder } from "../controller/order.controller.js";

const orderRoute = express.Router()

orderRoute.get("/", getOrders)
orderRoute.get("/:id", getOrder)
orderRoute.post("/new", makeOrder)
orderRoute.put("/update/:id", updateOrder)
orderRoute.put("/status/:id", orderStatus);
orderRoute.delete("/delete/:id", deleteOrder)

export default orderRoute
