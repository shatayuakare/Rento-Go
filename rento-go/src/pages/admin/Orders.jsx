import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            await axios.get("").then(res => {
                setOrders((res.data))
            }).catch(err => console.log(err))
        }
        getOrders();
    }, [orders])

    const conformOrder = async () => {
        await axios.delete("").then(res => {

        }).catch(err => console.log(err))
    }
    const cancelOrder = async () => {
        await axios.delete("").then(res => {

        }).catch(err => console.log(err))

    }
    const deleteOrder = async () => {
        await axios.delete("").then(res => {

        }).catch(err => console.log(err))
    }

    return (
        <div className="h-full overflow-y-auto">
            <table className="table">
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Orders