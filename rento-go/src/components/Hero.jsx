import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ imageLeft = false, vehicle }) => {

    const img = {
        bike: "https://pandomoto.com/wp-content/uploads/2021/05/eDSCF0221.jpg?format=webp&quality=auto",
        car: "https://www.bajaautoinsurance.com/wp-content/uploads/2022/10/how-does-car-insurance-work-when-youre-driving-someone-elses-car.jpg?format=webp&quality=auto",
    }
    const loadImg = (vehicle) => {
        if (vehicle === "bike") return img.bike
        if (vehicle === "car") return img.car
    }
    return (
        <div className="flex flex-wrap min-h-[60vh]">
            <div className={`sm:w-full md:w-1/2 content-center ${imageLeft ? "sm:order-first md:order-last" : "sm:order-last md:order-first"}`}>
                {
                    imageLeft ?
                        <img className='w-full h-full' src={loadImg(vehicle)} alt="image" />
                        : <div className='sm:p-4 xl:p-10'>
                            <h4 className='text-[4rem] text-zinc-700 font-bold capitalize'>
                                Rent a {vehicle}
                            </h4>

                            <div className="flex uppercase sm:gap-2 lg:gap-4 text-sm text-zinc-500 font-semibold my-4">
                                <span className="px-4 py-1 bg-zinc-200 rounded-xl">
                                    Luxury
                                </span>
                                <span className="px-4 py-1 bg-zinc-200 rounded-xl">
                                    Comfort
                                </span>
                                <span className="px-4 py-1 bg-zinc-200 rounded-xl">
                                    prestige
                                </span>
                            </div>


                            <p className='text-zinc-500 font-semibold'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non vel totam perspiciatis eveniet, possimus molestiae natus qui reprehenderit consequuntur.
                            </p>

                            <Link to={`/${vehicle}s`} className='btn h-10 rounded-md mt-10 text-white capitalize'>
                                Rent {vehicle}
                            </Link>
                        </div>
                }
            </div>
            <div className={`sm:w-full md:w-1/2 content-center ${imageLeft ? "sm:order-last" : "sm:order-first"}`}>
                {
                    imageLeft ?
                        <div className='sm:p-4 xl:p-10'>
                            <h4 className='text-[4rem] text-zinc-700 font-bold capitalize'>
                                Rent a {vehicle}
                            </h4>

                            <div className="flex uppercase sm:gap-2 lg:gap-4 text-sm text-zinc-500 font-semibold my-4">
                                <span className="px-4 py-1 bg-zinc-200 rounded-xl">
                                    Luxury
                                </span>
                                <span className="px-4 py-1 bg-zinc-200 rounded-xl">
                                    Comfort
                                </span>
                                <span className="px-4 py-1 bg-zinc-200 rounded-xl">
                                    prestige
                                </span>
                            </div>


                            <p className='text-zinc-500 font-semibold'>
                                Booking a self-driving car with us is simple and easy. You can browse our our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of you choice. Our user-friendly platform allows you to manage your bookings and view your trip history with ease.
                            </p>

                            <Link to={`/${vehicle}s`} className='btn h-10 rounded-md mt-10 text-white capitalize'>
                                Rent {vehicle}
                            </Link>
                        </div>
                        : <img className='w-full h-full' src={loadImg(vehicle)} alt="image" />
                }
            </div>
        </div>
    )
}

export default Hero