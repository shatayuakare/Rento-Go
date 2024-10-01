import React from 'react'
import HomeIndex from './HomeIndex'
import Rent from './Rent'
import FAQ from './FAQ'
import BrandMarquee from '../../components/BrandMarquee'
import CustomerReview from './CustomerReview'
import LocationCarousel from './LocationCarousel'


const Home = () => {
    return (
        <>
            <HomeIndex />
            <Rent />
            <LocationCarousel />
            <CustomerReview />
            <FAQ />
            <BrandMarquee />
        </>
    )
}

export default Home 