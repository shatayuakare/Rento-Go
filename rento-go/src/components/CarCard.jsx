import React from 'react'
import { Link } from 'react-router-dom'

const CarCard = ({ car }) => {
    // console.log(car)


    return (
        <div className='p-3 rounded-md shadow hover:shadow-lg bg-white text-zinc-800'>
            <img className='h-[10rem] hover:scale-105 mx-auto overflow-hidden' src={car.images[0]} alt="" />
            <h4 className='text-xl my-1 text-zinc-800 font-bold'>
                {car.brand} {car.name}
            </h4>
            <div className='flex justify-between text-xs capitalize py-3'>
                <ul className='grid gap-1'>
                    <li>Seat : {car.seats}</li>
                    <li>Luggage : {car.luggage}</li>
                    <li>Doors : {car.doors}</li>
                    <li>Fuel : {car.fuel}</li>
                </ul>

                <ul className="text-end gap-1 grid">
                    <li>Horsepower : {car.horsepower}</li>
                    <li>Engine : {car.engine}</li>
                    <li>Drive : <span className="uppercase"> {car.drive}</span> </li>
                    <li>Type : {car.cartype}</li>
                </ul>
            </div>
            <div className='flex justify-between'>
                <div className='ps-3'>
                    <span className='block text-xs text-center'>Per Day</span>
                    <span className='text-2xl font-bold text-black'>₹{car.price}/<sub className='font-normal text-sm'>Day</sub></span>
                </div>
                <Link to={`./${car._id}`} className='btn text-white h-11 min-h-10 rounded-md'>
                    Rent Car
                </Link>
            </div>
        </div>
    )
}

export default CarCard