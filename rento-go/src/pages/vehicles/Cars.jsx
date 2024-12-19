import React, { Suspense, useEffect, useState, lazy } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const VehicleHeading = lazy(() => import('../../components/heading/VehicleHeading'));
const Filter = lazy(() => import('../../components/Filter'));
const ContentLoader = lazy(() => import('../../components/ContentLoader'));
const CarCard = lazy(() => import('../../components/CarCard'))

const Cars = () => {

    const [car, setCar] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get("https://rento-go.onrender.com/vehicles").then((res) => {
                setCar((res.data).filter((elem) => 'cartype' in elem))
                setBrands([...new Set(data.filter((elem) => ('cartype' in elem)).map((ele) => ele.brand))])
            }).catch((err) => toast.error(err.response.data.message))
        }
        getVehicles()
    }, [])

    return (
        <section className='pt-20'>
            <VehicleHeading vehicle={'car'} />

            <div className="w-4/5 mx-auto mt-6">
                <Filter vehicle={'car'} brands={brands} />
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  sm:gap-3 sm:py-4 xl:gap-6 xl:w-4/5 mx-auto xl:px-4'>
                {
                    car.map((elem, index) => (
                        <Suspense key={index} fallback={<ContentLoader />}>
                            <CarCard car={elem} />
                        </Suspense>
                    ))
                }
            </div>
        </section>
    )
}

export default Cars