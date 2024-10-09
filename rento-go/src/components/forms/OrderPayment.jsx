import React from 'react'
import { Link } from "react-router-dom"

const OrderPayment = ({ order }) => {
    return (
        <dialog id="payment" className="modal">
            <div className="modal-box bg-white shadow-lg">
                <form method="dialog" >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <form action="">
                    <div className='grid gap-2'>
                        <h4 className='text-xl font-bold'>vehicle Details</h4>
                        <div>
                            Name : {order.vehicleName}
                        </div>
                        <div>
                            Pick Location : {order.pickUpLocation}
                        </div>
                        <div>
                            Pick Date : {order.pickDate}
                        </div>
                        <div>
                            Return Date : {order.returnDate}
                        </div>
                        <div>
                            Payment : <span className="text-green-600 font-bold text-2xl">₹ {order.payment}/-</span>
                        </div>
                    </div>

                    <div className='text-center mt-5'>
                        <Link to={"/cars"} className='btn btn-wide btn-ghost bg-green-700 hover:bg-green-800 text-xl text-white font-bold'>
                            Pay Now
                        </Link>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default OrderPayment