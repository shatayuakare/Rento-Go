import React from 'react'

const Orders = () => {
    return (
        <>
            <div className="border-2 border-zinc-300 p-5 bg-white h-1/3">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-zinc-700 text-sm'>
                            <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#9486t</span></td>
                            <td>Jeep</td>
                            <td>Nagpur</td>
                            <td>22/36/59</td>
                            <td>22/36/59</td>
                            <td>$9238</td>
                            <td><span className='bg-orange-500 p-1 text-white font-semibold px-3 rounded-xl'>Booking</span></td>
                        </tr>
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
                        <tr className='text-zinc-700 text-sm'>
                            <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#9486t</span></td>
                            <td>Jeep</td>
                            <td>Nagpur</td>
                            <td>22/36/59</td>
                            <td>22/36/59</td>
                            <td>$9238</td>
                            <td><span className='bg-green-500 p-1 text-white font-semibold px-3 rounded-xl'>Complete</span></td>
                        </tr>
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
                            <td><span className='bg-zinc-200 p1 px-2 rounded-xl font-semibold'>#9486t</span></td>
                            <td>Jeep</td>
                            <td>Nagpur</td>
                            <td>22/36/59</td>
                            <td>22/36/59</td>
                            <td>$9238</td>
                            <td><span className='bg-red-500 p-1 text-white font-semibold px-3 rounded-xl'>Cancelled</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders