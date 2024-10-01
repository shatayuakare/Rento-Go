import React from 'react'
import { Link } from 'react-router-dom';

const RentVehicleHeading = ({ vehicle }) => {

    return (
        <div className={`h-[60vh] ${vehicle === 'car' ? "bg-[url('https://e1.pxfuel.com/desktop-wallpaper/473/965/desktop-wallpaper-mclaren-p1-supercar-cars-backgrounds-supercars.jpg')]" : "bg-[url('https://cdn.room58.com/2023/01/16/682834760b0e89a6557ff63f5d48a176_7b22f13114835ba6.png')]"}  bg-center text-center text-white bg-cover`}>
            <div className="bg-black bg-opacity-35 h-full content-center">
                <div className="w-1/2 mx-auto">
                    <h4 className='text-[3rem] font-bold'>
                        Turn your {vehicle} into extra money
                    </h4>
                    <p className="text-lg py-5 text-zinc-300">
                        When list your {vehicle}, you're earning money while helping others navigate your city. It's a win-win, and your next big opportunity.
                    </p>
                    <Link to='#shareform' scroll={true} className="btn btn-ghost rounded-sm bg-zinc-100 text-black hover:bg-white text-md font-bold mt-3">
                        Share your {vehicle}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RentVehicleHeading