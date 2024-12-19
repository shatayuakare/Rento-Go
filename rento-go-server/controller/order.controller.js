import Orders from "../model/order.Schema.js"

export const makeOrder = async (req, res) => {
    try {
        const { vehicleName, pickUpLocation, pickDate, returnDate, payment, status, VID, UID
        } = req.body;

        const createOrder = new Orders({
            vehicleName, pickUpLocation, pickDate, returnDate, payment, status, VID, UID
        })
        await createOrder.save()
        res.status(201).json({ message: "Order Successfully", createOrder })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const orderStatus = async (req, res) => {
    try {
        const order = await Orders.findOneAndUpdate({ _id: req.params.id }, { status: req.body.status })
        if (!order) return res.status(404).json({ message: "Order not found" })

        res.status(200).json({ message: `Your Order is ${req.body.status}` });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const order = await Orders.findOneAndDelete({ _id: req.params.id });
        if (!order) return res.status(404).json({ message: "Order not found" });

        res.status(200).json({ message: "Order Deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateOrder = async (req, res) => {
    try {
        const { vehicleName, pickUpLocation, pickDate, returnDate, payment, status, VID, UID
        } = req.body;

        const order = await Orders.findOneAndUpdate({ _id: req.params.id }, {
            vehicleName, pickUpLocation, pickDate, returnDate, payment, status, VID, UID
        })


        res.status(201).json({ message: "Update Successfully", order })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await Orders.find()
        if (!orders) return res.status(200).json({ message: "Not Found" })

        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const getOrder = async (req, res) => {
    try {
        const order = await Orders.findOne({ _id: req.params.id })
        if (!order) return res.status(200).json({ message: "Not Found" })

        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}