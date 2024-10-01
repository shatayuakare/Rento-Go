import React from 'react'
import ShareForm from './forms/ShareForm'

const EasyBoarding = ({ vehicle }) => {

    return (
        <section className="py-[4rem] content-center bg-[url('https://st4.depositphotos.com/4337187/27124/i/450/depositphotos_271247768-stock-photo-white-background-of-old-paper.jpg')] bg-cover">
            <div className='grid grid-cols-2 w-4/5 mx-auto'>
                <div className="p-4 bg-white rounded-lg border shadow-lg px-16 content-center">
                    <ShareForm />
                </div>


                <div className="px-16 content-center">
                    <h4 className='capitalize sm:text-3xl md:text-5xl font-bold pt-10 mb-2'>Easy Boarding</h4>

                    <div className="">
                        <div className='flex'>
                            <div className="w-[15%] text-center flex">
                                <div className="divider pt-3 divider-horizontal after:w-1 after:rounded-full divider-start divider-error ">
                                    {
                                        vehicle === 'car' ?
                                            <i className='bx bxs-car text-3xl'></i>
                                            :
                                            <i className='bx bx-cycling text-3xl'></i>
                                    }
                                </div>
                            </div>
                            <div className="w-full py-4">
                                <h6 className='text-xl font-semibold'>Sign up and name your {vehicle}</h6>
                                <p className='mt-2 text-sm text-zinc-600'>
                                    On the sign-up from, you'll tell us about you and your {vehicle}. Give your car a name, and continue to the next step.
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="w-[15%] text-center flex">
                                <div className="divider pt-3 divider-horizontal after:w-1 after:rounded-full divider-start divider-error">
                                    <i className='bx bxs-cloud-upload text-3xl'></i>
                                </div>
                            </div>
                            <div className="w-full py-4">
                                <h6 className='text-xl font-semibold'>Create a profile and upload photos</h6>
                                <p className='mt-2 text-sm text-zinc-600'>
                                    If you have multiple vehicles, use the manager to create a profile for each one. Listing each car cost &100 for initial setup amd $20 per month--but you won't be charged until your car is ready for bookings.
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="w-[15%] text-center flex">
                                <div className="divider pt-3 divider-horizontal after:w-1 after:rounded-full divider-start divider-error">
                                    <i className='bx bx-devices text-3xl'></i>
                                </div>
                            </div>
                            <div className="w-full py-4">
                                <h6 className='text-xl font-semibold'>Install Rento-Go Connect</h6>
                                <p className='mt-2 text-sm text-zinc-600'>
                                    We'll reach out to have our propritary hardware, Getaround connects installed in your car. COnnect lets guest unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once connect is installed, you're ready for bookings.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className='p-4 bg-white rounded-xl shadow-xl mt-6 border-2'>
                        <h6 className='text-lg   font-semibold'>
                            Start earning
                        </h6>
                        <p className="text-sm mt-1 text-zinc-600">
                            As soon as you enable bookings, guests can start taking trips in your car and you can start earning money
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EasyBoarding