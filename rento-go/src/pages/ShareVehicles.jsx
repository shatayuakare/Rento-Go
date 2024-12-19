import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import RentVehicleHeading from '../components/heading/RentVehicleHeading'
import Refer from '../components/Refer'
import ShareHero from '../components/ShareHero'
const ContentLoader = lazy(() => import('../components/ContentLoader'))
const EasyBoarding = lazy(() => import('../components/EasyBoarding'))

const ShareVehicles = () => {
    const params = useParams()
    return (
        <section className='pt-20' id='shareform'>
            <RentVehicleHeading vehicle={params.vehicle} />
            <section className='content-center w-4/5 mx-auto'>
                <h4 className='text-[3rem] font-bold text-zinc-700'>
                    Earn Extra with Bonuses
                </h4>
                <ShareHero />
            </section>
            <Suspense fallback={<div className='h-full w-full'><ContentLoader /></div>}>
                <EasyBoarding vehicle={params.vehicle} />
            </Suspense>
            <Refer />
        </section>
    )
}

export default ShareVehicles