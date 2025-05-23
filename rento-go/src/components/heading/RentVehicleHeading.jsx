import React from 'react'
import { Link } from 'react-router-dom';

const RentVehicleHeading = ({ vehicle }) => {

    return (
        <div className={`h-[60vh] ${vehicle === 'car' ? "bg-[url('/images/share%20car%20banner%20bg.jpg?format=webp&quality=auto')]" : "bg-[url('/images/share%20bike%20banner%20bg.png?format=webp&quality=auto')]"}  bg-center text-center text-white bg-cover`}>
            <div className="bg-black bg-opacity-35 h-full content-center">
                <div className="w-1/2 mx-auto">
                    <h4 className='text-[3rem] font-bold'>
                        Turn your {vehicle} into extra money
                    </h4>
                    <p className="text-lg py-5 text-zinc-300">
                        When list your {vehicle}, you're earning money while helping others navigate your city. It's a win-win, and your next big opportunity.
                    </p>
                    <Link to={vehicle === 'car' ? '/share/bike' : '/share/car'} className="btn btn-ghost rounded-sm bg-zinc-100 text-black hover:bg-white text-md font-bold mt-3">
                        Share your {vehicle === 'car' ? 'Bike' : 'car'}
                        <i className='bx bx-arrow-from-left text-3xl hover:ms-3' ></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RentVehicleHeading