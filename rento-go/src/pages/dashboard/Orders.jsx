import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios'

const Orders = () => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [bookOrder, setBookOrder] = useState([])
    const [completeOrder, setCompleteOrder] = useState([])
    const [cancelOrder, setCancelOrder] = useState([])

    useEffect(() => {
        const getUserDetail = async () => {
            await axios.get(`https://rento-go.onrender.com/auth/${authUser._id}`).then(res => {
                const order = res.data.order
                const book = order.filter(elem => elem.status === 'booked')
                const complete = order.filter(elem => elem.status === 'success')
                const cancel = order.filter(elem => elem.status === 'cancel')

                setBookOrder(book)
                setCompleteOrder(complete)
                setCancelOrder(cancel)

            }).catch(err => toast.error(err.response.data.message))
        }

        getUserDetail()
    }, [])



    return (
        <>
            <div className="border-2 border-zinc-300 p-5 bg-white h-1/3 overflow-y-scroll">
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
                                    <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id.substr(elem_id.length - 5)}</span></td>
                                    <td>{elem.vehicle}</td>
                                    <td>{elem.location}</td>
                                    <td>{elem.pickDate}</td>
                                    <td>{elem.returnDate}</td>
                                    <td>${elem.price}/-</td>
                                    <td><span className='bg-orange-500 p-1 text-white font-semibold px-3 rounded-xl'>Booking</span></td>
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
                                    <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id.substr(elem_id.length - 5)}</span></td>
                                    <td>{elem.vehicle}</td>
                                    <td>{elem.location}</td>
                                    <td>{elem.pickDate}</td>
                                    <td>{elem.returnDate}</td>
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

                        <tr className='text-zinc-700 text-sm'>
                            {
                                cancelOrder.map((elem) => (
                                    <tr className='text-zinc-700 text-sm' key={elem._id}>
                                        <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id.substr(elem_id.length - 5)}</span></td>
                                        <td>{elem.vehicle}</td>
                                        <td>{elem.location}</td>
                                        <td>{elem.pickDate}</td>
                                        <td>{elem.returnDate}</td>
                                        <td>${elem.price}/-</td>
                                        <td><span className='bg-red-500 p-1 text-white font-semibold px-3 rounded-xl'>Cancelled</span></td>
                                    </tr>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders