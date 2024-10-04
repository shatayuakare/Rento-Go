import React from 'react'
import { Link } from 'react-router-dom'

const ShareHero = () => {
    return (
        <div className="grid sm:grid-col-1 lg:grid-cols-2 capitalize">
            <div className="md:order-1 sm:order-2  content-center relative">
                <div className='bg-white border-2 shadow-xl rounded-2xl lg:p-10 sm:p-4 md:p-6 ps-0 lg:absolute lg:top-20 w-full lg:left-24'>
                    <div className='flex justify-between'>
                        <h5 className='text-4xl font-bold w-4/5'>Do you want to Share your Vehicle?</h5>
                        <div className='h-6 w-6 rounded-full  bg-zinc-500'></div>
                    </div>
                    <p className="font-semibold text-zinc-500 py-6">
                        We'll uyse your car's location to calculate your onboard bonus. Each ZIP Code will belong to One of five zones. Zones are based on guest demanf for cars. More Guest demand means a higher zone, And bigger bonouses for cars. Zone 1 gets the highest bouns. while zones 4 and 5 aren't eligible for the onboard bonus.
                    </p>

                    <Link to={'/share/cars'} className="btn rounded-sm text-white">
                        Learn More
                        <i className='bx bx-up-arrow-alt text-2xl rotate-45' ></i>
                    </Link>
                </div>
            </div>
            <div className="xl:order-1 sm:order-2">
                <img className='w-full h-full' src="https://img.freepik.com/free-photo/i-m-very-impressed-about-that-new-vehicle-female-customer-modern-stylish-bearded-businessman-automobile-saloon_146671-16065.jpg" alt="" />
            </div>
        </div>
    )
}

export default ShareHero