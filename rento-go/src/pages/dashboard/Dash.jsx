import React, { Suspense, useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios'
import { toast } from 'react-toastify'
import ContentLoader from '../../components/ContentLoader'

// this is mfor only rendering color before load the page 
[
    "text-green-300",
    "text-red-300",
    "text-orange-300",
    "text-green-500",
    "text-red-500",
    "text-orange-500",
]

const Dash = () => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [orders, setOrders] = useState([])

    useEffect(() => {

        const getOrders = async () => {
            await axios.get("https://rento-go.onrender.com/orders").then(res => {
                console.log(res.data.filter(elem => elem.UID === authUser._id))
                setOrders(res.data)

            }).catch(error =>
                console.error(error)
            )

        }
        getOrders()
        // const getOrders = async () => {
        //     await axios.get("https://rento-go.onrender.com/orders").then(res => {
        //         const order = (res.data).filter(elem => elem.UID === authUser._id)
        //         if (!order) return console.log("Empty");
        //         setOrders(order)
        //     }).catch(err => toast.error(err.essage))
        // }
        // getOrders()
    }, [])

    const history = [
        {
            title: "Total Order",
            count: orders.length,
            icon: "bx bxs-book-bookmark",
            color: "green"
        },
        {
            title: "Coupons",
            // count: authUser.coupons || 0,
            icon: "bx bxs-purchase-tag",
            color: "orange"
        },
        {
            title: "Cancel Order",
            // count: (orders.filter(elem => elem.status === "cancel")),
            icon: "bx bx-task-x",
            color: "red"
        },
    ]

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();

        return `${day}-${month}-${year}`;
    }


    return (
        <>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-3 lg:gap-6 h-1/3'>
                {
                    history.map((elem, index) => (
                        <div className="p-6 rounded-sm text-zinc-700 bg-white border-2 border-zinc-300 relative" key={index}>
                            <i className={`${elem.icon} text-${elem.color}-300 text-[5.5rem] absolute bottom-3 right-3`}></i>

                            <h5 className={`text-[3rem] font-extrabold pb-1 text-${elem.color}-500`}>
                                {elem.count < 10 ? '0' + elem.count : elem.count}
                            </h5>
                            <div className='text-xl text-zinc-500 font-semibold'>{elem.title}</div>
                        </div>
                    ))
                }
            </div>
            <div className='border-2 p-5 bg-white border-zinc-300 min-h-2/3 h-2/3'>
                <h5 className="text-2xl text-zinc-800 font-semibold">My Recent Order</h5>

                <table className="table text-sm max-h-full overflow-y-scroll">
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
                            orders && orders.map((elem, index) => (
                                <Suspense fallback={<ContentLoader />} key={index}>
                                    <tr className='text-zinc-700 text-sm' >
                                        <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#{elem._id.substr(elem._id.length - 3)}</span></td>
                                        <td>{elem.vehicleName}</td>
                                        <td>{elem.pickUpLocation}</td>
                                        <td>{formatDate(elem.pickDate)}</td>
                                        <td>{formatDate(elem.returnDate)}</td>
                                        <td className='font-bold'>₹{elem.payment}/-</td>
                                        <td className='capitalize'>
                                            {
                                                elem.status === 'book' ? <span className='bg-green-500 p-1 text-white font-semibold px-3 rounded-xl'>{elem.status}</span>
                                                    :
                                                    elem.status === 'cancel' ?
                                                        <span className='bg-red-500 p-1 text-white font-semibold px-3 rounded-xl'>{elem.status}</span>
                                                        :
                                                        <span className='bg-green-500 p-1 text-white font-semibold px-3 rounded-xl'>{elem.status}
                                                        </span>
                                            }
                                        </td>
                                    </tr>
                                </Suspense>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dash