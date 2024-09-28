import React from 'react'
import HomeIndex from './home/HomeIndex'
import Rent from './home/Rent'
import FAQ from './home/FAQ'
import BrandMarquee from '../components/BrandMarquee'

const Home = () => {
    return (
        <>
            <HomeIndex />
            <Rent />
            <FAQ />
            <BrandMarquee />
        </>
    )
}

export default Home 