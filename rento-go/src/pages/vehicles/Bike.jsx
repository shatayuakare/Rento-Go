import React from 'react'
import BikeCard from '../../components/BikeCard'

const Bike = () => {
    return (
        <section className='py-20'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-3 sm:py-4 xl:gap-6 sm:mx-2 xl:mx-28'>
                <BikeCard />
                <BikeCard />
                <BikeCard />
                <BikeCard />
            </div>
        </section>
    )
}

export default Bike