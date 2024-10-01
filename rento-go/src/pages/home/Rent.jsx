import React from 'react'
import Hero from "../../components/Hero"
import WhyChoose from './WhyChoose'
import ShareHero from '../../components/ShareHero'
const Rent = () => {
    return (
        <section className='min-h-auto sm:pt-0 md:pt-20 lg:pt-28 sm:pb-8 lg:pb-20'>
            <div className='sm:mx-0 md:mx-8 lg:mx-20 xl:mx-28 flex flex-col sm:gap-4 lg:gap-24'>
                <Hero vehicle={'bike'} />
                <Hero imageLeft={true} vehicle={'car'} />

                <ShareHero />
                <WhyChoose />
            </div>

        </section>
    )
}

export default Rent