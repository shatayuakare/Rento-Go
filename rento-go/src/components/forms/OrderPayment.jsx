import React, { useEffect, useState } from 'react'

const OrderPayment = ({ order, payment }) => {

    const [orderDetail, setOrderDetail] = useState()

    useEffect(() => {
        setOrderDetail(order)
    }, [order])
    const paymentHandler = (event) => {
        event.preventDefault();
        console.log(order)
    }

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white shadow-lg">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <form action="" onSubmit={paymentHandler}>
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
                            Payment : <span className="text-green-600 font-bold text-2xl">₹ {payment}/-</span>
                        </div>
                    </div>

                    <div className='text-center mt-5'>
                        <button type='submit' className='btn btn-wide btn-ghost bg-green-700 hover:bg-green-800 text-xl text-white font-bold'>
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default OrderPayment