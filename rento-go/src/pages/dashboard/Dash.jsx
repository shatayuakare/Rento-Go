import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios'
import { toast } from 'react-toastify'


const Dash = () => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getUserDetail = async () => {

            const id = authUser._id
            await axios.get(`https://rento-go.onrender.com/auth/${id}`).then(res => {
                setRecentOrders(res.data.order)
            }).catch(err => toast.error(err.response.data.message))
        }

        const getOrders = async () => {
            await axios.get("https://rento-go.onrender.com/orders").then(res => setOrders(res.data)).catch(err => toast.error(err.response.data.message))
        }

        getUserDetail()
        getOrders()
    }, [])

    const history = [
        {
            title: "Total Order",
            count: orders.length,
            icon: "bx bxs-book-bookmark"
        },
        {
            title: "Coupons",
            count: authUser.coupons,
            icon: "bx bxs-purchase-tag"
        },
        {
            title: "Cancel Order",
            count: 2,
            icon: "bx bx-task-x"
        },
    ]

    return (
        <>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-3 lg:gap-6 h-1/3'>
                {
                    history.map((elem, index) => (
                        <div className="p-6 rounded-sm text-zinc-700 bg-white border-2 border-zinc-300 relative" key={index}>
                            <i className={`${elem.icon} text-zinc-300 text-[5.5rem] absolute bottom-3 right-3`}></i>

                            <h5 className='text-[3rem] font-extrabold pb-1'>
                                {elem.count < 10 ? '0' + elem.count : elem.count}
                            </h5>
                            <div className='text-xl text-zinc-500 font-semibold'>{elem.title}</div>
                        </div>
                    ))
                }
            </div>
            <div className='border-2 p-5 bg-white border-zinc-300 min-h-2/3 h-2/3'>
                <h5 className="text-2xl text-zinc-800 font-semibold">My Recent Order</h5>

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
                            orders.map((elem, index) => (
                                <tr className='text-zinc-700 text-sm' key={index}>
                                    <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id.substr(elem_id.length - 5)}</span></td>
                                    <td>{elem.vehicle}</td>
                                    <td>{elem.location}</td>
                                    <td>{elem.pickDate}</td>
                                    <td>{elem.returnDate}</td>
                                    <td>₹{elem.payment}/-</td>
                                    <td><span className='bg-green-500 p-1 text-white font-semibold px-3 rounded-xl'>{elem.status}</span></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dash