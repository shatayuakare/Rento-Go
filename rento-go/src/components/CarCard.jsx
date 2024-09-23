import React from 'react'

const CarCard = () => {
    return (
        <div className='p-5 rounded-md shadow bg-white text-zinc-800'>
            <img className='h-[10rem] mx-auto' src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png" alt="" />
            <h4 className='text-xl text-zinc-800 font-bold'>
                Car name
            </h4>
            <div className='flex justify-between text-xs capitalize py-3'>
                <ul>
                    <li>Seat : 4</li>
                    <li>Luggage : 4</li>
                    <li>Doors : 4</li>
                    <li>Fuel : petrol</li>
                </ul>

                <ul className="text-end">
                    <li>Horsepower : 500</li>
                    <li>Engine : 3000</li>
                    <li>Drive : 4</li>
                    <li>Type : Hatchback</li>
                </ul>
            </div>
            <div className='flex justify-between'>
                <div>
                    <span className='block text-xs text-center'>Per Day</span>
                    <span className='text-2xl font-bold text-black'>₹5000/-</span>
                </div>
                <button className='btn text-white h-10 rounded-md'>
                    Rent Car
                </button>
            </div>
        </div>
    )
}

export default CarCard