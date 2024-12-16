import React from 'react'
import RentVehicleHeading from '../components/heading/RentVehicleHeading'
import Refer from '../components/Refer'
import EasyBoarding from '../components/EasyBoarding'
import { useParams } from 'react-router-dom'
import ShareHero from '../components/ShareHero'

const ShareVehicles = () => {

    const params = useParams()

    const vehicle = params.vehicle

    return (
        <section className='pt-20' id='shareform'>

            <RentVehicleHeading vehicle={vehicle} />

            <section className='content-center w-4/5 mx-auto'>
                <h4 className='text-[3rem] font-bold text-zinc-700'>
                    Earn Extra with Bonuses
                </h4>
                <ShareHero />
            </section>

            <EasyBoarding vehicle={vehicle} />
            <Refer />

        </section>
    )
}

export default ShareVehicles