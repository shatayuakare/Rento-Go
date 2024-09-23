import React from 'react'
import CarCard from '../components/CarCard'

const Cars = () => {
    return (
        <section className='content-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-3 sm:py-4 xl:gap-6 sm:mx-2 xl:mx-28'>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
        </section>
    )
}

export default Cars