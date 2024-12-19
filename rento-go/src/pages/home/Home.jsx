import React, { lazy, Suspense } from 'react'
import HomeIndex from './HomeIndex'
import ContentLoader from '../../components/ContentLoader'
const Rent = lazy(() => import('./Rent'))
const FAQ = lazy(() => import('./FAQ'))
const BrandMarquee = lazy(() => import('../../components/BrandMarquee'))
const CustomerReview = lazy(() => import('./CustomerReview'))
const LocationCarousel = lazy(() => import('./LocationCarousel'))

const Home = () => {
    return (
        <>
            <HomeIndex />
            <Suspense fallback={<ContentLoader />}>
                <Rent />
                <LocationCarousel />
                <CustomerReview />
                <FAQ />
                <BrandMarquee />
            </Suspense>
        </>
    )
}

export default Home 