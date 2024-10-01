import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios'
import { toast } from 'react-toastify'

const history = [
    {
        title: "Total Order",
        count: 3,
        icon: "bx bxs-book-bookmark"
    },
    {
        title: "Coupons",
        count: 11,
        icon: "bx bxs-purchase-tag"
    },
    {
        title: "Cancel Order",
        count: 9,
        icon: "bx bx-task-x"
    },
]
const Dash = () => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [recentOrder, setRecentOrders] = useState([])

    useEffect(() => {
        const getUserDetail = async () => {

            const id = authUser._id
            await axios.get(`http://localhost:8080/auth/${id}`).then(res => {
                // console.log("success", res.data)
                setRecentOrders(res.data.order)
            }).catch(err => toast.error(err.response.data.message))
        }

        getUserDetail()
    }, [])
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
                            recentOrder ?
                                recentOrder.map((elem, index) => (
                                    <tr className='text-zinc-700 text-sm' key={index}>
                                        <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id}</span></td>
                                        <td>Jeep</td>
                                        <td>Nagpur</td>
                                        <td>22/36/59</td>
                                        <td>22/36/59</td>
                                        <td>$9238</td>
                                        <td><span className='bg-green-500 p-1 text-white font-semibold px-3 rounded-xl'>Complete</span></td>
                                    </tr>
                                ))

                                :

                                <tr className='text-zinc-700 text-sm'>
                                    <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#9486t</span></td>
                                    <td>Jeep</td>
                                    <td>Nagpur</td>
                                    <td>22/36/59</td>
                                    <td>22/36/59</td>
                                    <td>$9238</td>
                                    <td><span className='bg-orange-500 p-1 text-white font-semibold px-3 rounded-xl'>Pending</span></td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dash