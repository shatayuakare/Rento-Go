import React from 'react'
import { Link } from 'react-router-dom'

const BikeCard = ({ bike }) => {

    return (
        <div className='p-5 rounded-md shadow bg-white text-zinc-800'>
            <img className='h-[10rem] mx-auto' src={bike.images[0]} alt="" />
            <h4 className='text-xl text-zinc-800 font-bold'>
                {bike.brand} {bike.model}
            </h4>
            <div className='flex justify-between text-xs capitalize py-3'>
                <ul>
                    <li>Seat : {bike.seats}</li>
                    <li>Fuel : {bike.fuel}</li>
                    <li>Front Break : Disc/Drum</li>
                    <li>Gear Box : {bike.gearbox}-speed</li>
                </ul>

                <ul className="text-end">
                    <li>Horsepower : {bike.horsepower}</li>
                    <li>Engine : {bike.engine}</li>
                    <li>Stock : {bike.stock} min</li>
                    <li>Overall Milleage : {bike.mileage} kmpl</li>
                </ul>
            </div>
            <div className='flex justify-between'>
                <div>
                    <span className='block text-xs text-center'>Per Day</span>
                    <span className='text-2xl font-bold text-black'>₹{bike.price}/-</span>
                </div>
                <Link to={`./${bike._id}`} className='btn text-white h-11 min-h-10 rounded-md'>
                    Rent Bike
                </Link>
            </div>
        </div>
    )
}

export default BikeCard