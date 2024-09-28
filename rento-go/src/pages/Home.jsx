import React from 'react'
import HomeIndex from './home/HomeIndex'
import Rent from './home/Rent'
import FAQ from './home/FAQ'
import BrandMarquee from '../components/BrandMarquee'
import CustomerReview from './home/CustomerReview'
import LocationCarousel from './home/LocationCarousel'


const Home = () => {
    return (
        <>
            <HomeIndex />
            <Rent />
            <CustomerReview />
            <LocationCarousel />
            <FAQ />
            <BrandMarquee />
        </>
    )
}

export default Home 