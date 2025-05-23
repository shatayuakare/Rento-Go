import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios'
import { server } from '../../utils/Constants'

const Orders = () => {
    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [bookOrder, setBookOrder] = useState([])
    const [completeOrder, setCompleteOrder] = useState([])
    const [cancelOrder, setCancelOrder] = useState([])

    useEffect(() => {
        const getOrders = async () =>{
            await axios.get(`${server}/orders`).then(res=>{
                const orders = res.data.filter(elem => authUser._id == elem.UID);
                setBookOrder(orders.filter(elem=>elem.status == "pending"));
                setCompleteOrder(orders.filter(elem=>elem.status == "complete"));
                setCancelOrder(orders.filter(elem=>elem.status == "cancel"));
            }).catch(err=>console.error(err.message));
        } 

        getOrders();
    }, [bookOrder, completeOrder, cancelOrder])
    
    return (
        <>
            <div className="border-2 border-zinc-300 p-5 bg-white h-auto min-h-1/3 overflow-y-scroll">
                <h5 className="text-2xl text-zinc-800 font-semibold">Booking Order</h5>
                <table className="table text-sm">
                    <thead>
                        <tr className='text-zinc-600'>
                            <th>Booking No</th>
                            <th>Vehicle Name</th>
                            <th>Pick-up Location</th>
                            <th>Place Date</th>
                            <th>Return Date</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookOrder.map((elem) => (
                                <tr className='text-zinc-700 text-sm' key={elem._id}>
                                    <td><span className='bg-zinc-200 p1 px-2 capitalize rounded-xl font-semibold'>#{elem._id.substr(elem._id.length - 5)}</span></td>
                                    <td>{elem.vehicleName}</td>
                                    <td className=' capitalize'>{elem.pickUpLocation}</td>
                                    <td>{new Date(elem.pickDate).toLocaleDateString()}</td>
                                    <td>{new Date(elem.returnDate).toLocaleDateString()}</td>
                                    <td>${elem.price}/-</td>
                                    <td><span className='bg-orange-500 p-1 text-white font-semibold px-3 rounded-xl'>Booking</span></td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="border-2 border-zinc-300 p-5 bg-white h-1/3">
                <h5 className="text-2xl text-zinc-800 font-semibold">Complete Order</h5>

                <table className="table text-sm">
                    <thead>
                        <tr className='text-zinc-600'>
                            <th>Booking No</th>
                            <th>Vehicle Name</th>
                            <th>Pick-up Location</th>
                            <th>Place Date</th>
                            <th>Return Date</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            completeOrder.map((elem) => (
                                <tr className='text-zinc-700 text-sm' key={elem._id}>
                                    <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id.substr(elem._id.length - 5)}</span></td>
                                        <td>{elem.vehicleName}</td>
                                    <td className=' capitalize'>{elem.pickUpLocation}</td>
                                    <td>{new Date(elem.pickDate).toLocaleDateString()}</td>
                                    <td>{new Date(elem.returnDate).toLocaleDateString()}</td>
                                    <td>${elem.price}/-</td>
                                    <td><span className='bg-green-500 p-1 text-white font-semibold px-3 rounded-xl'>Complete</span></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <div className="border-2 border-zinc-300 p-5 bg-white h-1/3">
                <h5 className="text-2xl text-zinc-800 font-semibold">Cancelled Order</h5>

                <table className="table text-sm">
                    <thead>
                        <tr className='text-zinc-600'>
                            <th>Booking No</th>
                            <th>Vehicle Name</th>
                            <th>Pick-up Location</th>
                            <th>Place Date</th>
                            <th>Return Date</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                            {
                                cancelOrder.map((elem) => (
                                    <tr className='text-zinc-700 text-sm' key={elem._id}>
                                        <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id.substr(elem._id.length - 5)}</span></td>
                                        <td>{elem.vehicleName}</td>
                                        <td className=' capitalize'>{elem.pickUpLocation}</td>
                                        <td>{new Date(elem.pickDate).toLocaleDateString()}</td>
                                        <td>{new Date(elem.returnDate).toLocaleDateString()}</td>
                                        <td>${elem.price}/-</td>
                                        <td><span className='bg-red-500 p-1 text-white font-semibold px-3 rounded-xl'>Cancelled</span></td>
                                    </tr>
                       
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders