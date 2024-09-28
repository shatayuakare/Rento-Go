import React from 'react'
import Hero from "../../components/Hero"
import WhyChoose from './WhyChoose'
import { Link } from 'react-router-dom'
const Rent = () => {
    return (
        <section className='min-h-auto sm:pt-0 md:pt-20 lg:pt-28 sm:pb-8 lg:pb-20'>
            <div className='sm:mx-0 md:mx-8 lg:mx-20 xl:mx-28 flex flex-col sm:gap-4 lg:gap-24'>
                <Hero vehicle={'bike'} />
                <Hero imageLeft={true} vehicle={'car'} />

                <div className="grid sm:grid-col-1 lg:grid-cols-2 capitalize">
                    <div className="sm:p-4 md:p-6 md:order-1 sm:order-2 lg:p-10 content-center">
                        <h5 className='text-4xl font-bold w-4/5'>Do you want to Share your Vehicle?</h5>
                        <p className="font-semibold text-zinc-500 py-6">
                            We'll uyse your car's location to calculate your onboard bonus. Each ZIP Code will belong to One of five zones. Zones are based on guest demanf for cars. More Guest demand means a higher zone, And bigger bonouses for cars. Zone 1 gets the highest bouns. while zones 4 and 5 aren't eligible for the onboard bonus.
                        </p>

                        <Link to={'/share'} className="btn rounded-sm text-white">
                            Learn More
                            <i className='bx bx-up-arrow-alt text-2xl rotate-45' ></i>
                        </Link>
                    </div>
                    <div className="xl:order-1 sm:order-2">
                        <img className='w-full h-full' src="https://img.freepik.com/free-photo/i-m-very-impressed-about-that-new-vehicle-female-customer-modern-stylish-bearded-businessman-automobile-saloon_146671-16065.jpg" alt="" />
                    </div>
                </div>
                <WhyChoose />
            </div>

        </section>
    )
}

export default Rent