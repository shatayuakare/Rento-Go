import React from 'react'
import Rent from './home/Rent'
import LocationCarousel from './home/LocationCarousel'
import PageHeading from '../components/heading/PageHeading'

const About = () => {
    return (
        <>
            <div className="">
                <PageHeading>
                    <h4 className='text-[3rem] font-bold text-white'>About Us</h4>
                </PageHeading>
            </div>
            <Rent />
            <LocationCarousel />
        </>
    )
}

export default About