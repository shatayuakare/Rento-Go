import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import cities from "../../api/availableCities.json"
import OrderPayment from './OrderPayment'

const BookForm = ({ data }) => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [price, setPrice] = useState("0")
    const [duration, setDuration] = useState("0")
    const [location, setLocation] = useState("nagpur")
    const [pickDate, setPickDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [order, setOrder] = useState({
        vehicleName: "",
        pickUpLocation: "",
        pickDate: "",
        returnDate: "",
        UID: "",
        VID: "",
        status: "pending"
    })


    const [error, setError] = useState(null)

    const calculateTimeDiff = (pickDateTime, returnDateTime) => {
        const pickDate = new Date(pickDateTime);
        const returnDate = new Date(returnDateTime);
        const diffMs = returnDate.getTime() - pickDate.getTime();
        const diffSec = Math.floor(diffMs / 1000);
        const diffMin = Math.floor(diffSec / 60);
        const diffHour = Math.floor(diffMin / 60);
        const diffDay = Math.floor(diffHour / 24);
        const diffWeek = Math.floor(diffDay / 7);

        setPrice((data.price / 24) * diffHour)
        if (diffHour < 24) {
            return `${diffHour} hours`;
        } else if (diffDay < 7) {
            return `${diffDay} days`;
        } else {
            return `${diffWeek} weeks ${diffDay % 7} days`;
        }
    }

    useEffect(() => {
        setDuration(calculateTimeDiff(pickDate, returnDate))
    }, [pickDate, returnDate]);


    const fav = false


    const makeOrder = (event) => {
        event.preventDefault();

        if (!location) return setError("Please enter location")
        if (!pickDate) return setError("Please enter pickup Date")
        if (!returnDate) return setError("Please enter Return Date")

        const order = {
            vehicleName: `${data.brand} ${data.model}`,
            pickUpLocation: location,
            pickDate,
            returnDate,
            UID: authUser._id,
            VID: data._id,
            status: "pending"
        }
        setOrder(order);
        document.getElementById('my_modal_3').showModal()


        // setPickDate("")
        // setReturnDate("")
        // setLocation("none")
    }


    return (
        <form className='text-zinc-700 relative grid gap-6' action="" onSubmit={makeOrder}>

            <div className="flex justify-between items-center">
                <div className='font-bold text-2xl'>
                    {data.brand} {data.name} {data.model}
                </div>
                <button type='button' className='btn btn-ghost bg-black btn-circle text-3xl p-2 border-2 text-red-500 border-red-500'>
                    {
                        !fav ?
                            <i className='bx bxs-heart'></i>
                            :
                            <i className='bx bx-heart'></i>
                    }
                </button>
            </div>
            <div>
                <label htmlFor="location" className="label">
                    Location
                </label>
                <select name="location" id="location" className='select w-full select-bordered bg-zinc-100 h-auto rounded-md  min-h-0 py-2'
                    defaultValue={location}
                    onChange={(event) => setLocation(event.currentTarget.value)}>
                    {
                        cities.map((elem, index) => <option key={index} value={elem.city}>{elem.city}</option>)
                    }
                </select>
            </div>

            <div>
                <label className='label' htmlFor="pickup-date">
                    Pick-Up
                </label>
                <input className='input w-full bg-zinc-100 h-10' type="date" name="pickup-date" id='pickup-date'
                    value={pickDate}
                    onChange={(event) => setPickDate(event.target.value)} />
            </div>

            <div>
                <label className='label' htmlFor="drop-off">
                    Expected Drop-Off
                </label>
                <input className='input w-full bg-zinc-100 h-10' type="date" name="drop-off" id='drop-off'
                    value={returnDate}
                    onChange={(event) => setReturnDate(event.target.value)} />
                {
                    error && <div className='text-red-500'>{error}</div>
                }
            </div>
            <div className='flex justify-between'>
                <div>
                    <div className="text-lg font-semibold">Duration</div>
                    <div className='text-zinc-500'>
                        {duration}
                    </div>
                </div>
                <div className="p-3 text-3xl px-4 rounded-full bg-white  font-bold text-blue-500">
                    <span className="text-[1.5rem] font-normal">₹</span>{price}/-
                </div>
            </div>


            <button type='button' className="btn w-full text-white" onClick={makeOrder}>
                Book Now
            </button>
            <OrderPayment payment={price} order={order} />
        </form>
    )
}

export default BookForm