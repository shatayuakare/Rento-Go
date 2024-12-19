import React, { lazy, Suspense, useEffect, useState } from 'react'
const BikeCard = lazy(() => import('../../components/BikeCard'))
// import BikeCard from '../../components/BikeCard'
import axios from 'axios';
import VehicleHeading from '../../components/heading/VehicleHeading';
import Filter from '../../components/Filter';
import ContentLoader from '../../components/ContentLoader';

const Bike = () => {

    const [bikes, setBikes] = useState([]);
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
            setTimeout(async () => {
                await axios.get("https://rento-go.onrender.com/vehicles").then((res) => {
                    const data = res.data;
                    setBikes(data.filter((elem) => !('cartype' in elem)))
                    setBrands([...new Set(data.filter((elem) => !('cartype' in elem)).map((ele) => ele.brand))])
                }).catch((err) => toast.error(err.response.data.message))
            }, 10000);

        }
        getVehicles()
    }, [])

    return (
        <section className='py-20'>
            <VehicleHeading vehicle={'bike'} />

            <div className="w-4/5 mx-auto mt-6">
                <Filter vehicle={'bike'} brands={brands} />
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  sm:gap-3 sm:py-4 xl:gap-6 xl:w-4/5 mx-auto xl:px-4'>
                <Suspense fallback={<ContentLoader />}>
                    {
                        bikes.map((elem, index) => (
                            <BikeCard bike={elem} key={index} />
                        ))
                    }
                </Suspense>

            </div>
        </section >
    )
}

export default Bike