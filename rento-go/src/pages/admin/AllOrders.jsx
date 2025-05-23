import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ContentLoader from '../../components/ContentLoader';
import { server } from '../../utils/Constants';

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const getOrders = async () => {
            await axios.get(`${server}/orders`).then(res => {

                const orderPromises = res.data.map(async (elem) => {
                    return await axios.get(`${server}/vehicles/${elem.VID}`)
                        .then(r => {
                            const img = r.data.images[0];
                            return { ...elem, img };
                        })
                        .catch(err => {
                            toast.error(err.message);
                            return { ...elem, img: null };
                        });
                });

                Promise.all(orderPromises).then(ordersWithImages => {
                    setOrders(ordersWithImages);
                });
            }).catch(err => toast.error(err.message));
        }
        getOrders()
    }, [orders])

    const deleteOrder = async (id) => {
        await axios.delete(`${server}/orders/delete/${id}`).then(res => {
            toast.success(res.data.message)
        }).catch(err => console.log(err))
    }
    const cancelOrder = async (id) => {
        await axios.put(`${server}/orders/status/${id}`, { status: 'cancel' }).then(res => {
            toast.warning(res.data.message)
        }).catch(err => console.error(err.message))
    }

    const conformOrder = async (id) => {
        await axios.put(`${server}/orders/status/${id}`, { status: 'conform' }).then(res => {
            toast.success(res.data.message)
        }).catch(err => console.error(err.message))
    }


    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();

        return `${day}-${month}-${year}`;
    }

    return (
        <div className="h-full overflow-y-auto">
            <table className="table">
                <thead className='text-white text-center sticky top-0 text-md bg-zinc-700 '>
                    <tr>
                        <th>{orders.length}</th>
                        <th>Vehicle Image</th>
                        <th>Vehicles-Name</th>
                        <th>Pickup-Location</th>
                        <th>Pickup-Date</th>
                        <th>Return-Date</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='text-zinc-600  capitalize'>
                    {
                        orders.map((elem, i) =>
                            <Suspense fallback={<ContentLoader />} key={elem._id}>
                                <tr >
                                    <td>{i + 1}</td>
                                    <td>
                                        <img className='w-48 h-28' src={`${elem.img}?format-webp&quality=auto`} alt={elem.vehicleName} />
                                    </td>
                                    <td>{elem.vehicleName}</td>
                                    <td>{elem.pickUpLocation}</td>
                                    <td>{formatDate(elem.pickDate)}</td>
                                    <td>{formatDate(elem.returnDate)}</td>
                                    <td className='text-lg font-bold'>₹{elem.payment}/-</td>
                                    <td className={(elem.status === 'pending') ? "text-yellow-500" : (elem.status === 'conform') ? "text-green-500" : "text-red-500"}>
                                        <span className='font-bold'>
                                            {elem.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="dropdown dropdown-top dropdown-end dropdown-left bg-transparent p-0">
                                            <div tabIndex={0} role="button" className="btn btn-sm bg-transparent min-w-0 w-8 h-8  hover:bg-zinc-100 rounded-full min-h-0 border-0 text-black">
                                                <i className='bx text-xl bx-dots-vertical-rounded'></i>
                                            </div>

                                            <ul tabIndex={0} className="dropdown-content bg-white vehicle-menu menu p-1 z-[1] text-nowrap text-start">
                                                <li>
                                                    <button className='btn text-green-500 btn-xs btn-ghost ' type='button'
                                                        onClick={() => conformOrder(elem._id)}>
                                                        Conform
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className='btn text-red-600 btn-xs btn-ghost ' type='button'
                                                        onClick={() => cancelOrder(elem._id)}>
                                                        Cancel
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className='btn text-red-400 btn-xs btn-ghost ' type='button' onClick={() => deleteOrder(elem._id)}>
                                                        Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </Suspense>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllOrders