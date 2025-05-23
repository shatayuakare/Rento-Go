import React, { lazy, Suspense, useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../../utils/Constants';
import { toast } from 'react-toastify';
const VehicleHeading = lazy(() => import('../../components/heading/VehicleHeading'));
const BikeCard = lazy(() => import('../../components/BikeCard'))
const Filter = lazy(() => import('../../components/Filter'));
const ContentLoader = lazy(() => import('../../components/ContentLoader'));

const Bike = () => {
    const [bikes, setBikes] = useState([]);
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
                await axios.get(`${server}/vehicles`).then((res) => {
                    setBikes((res.data).filter((elem) => !('cartype' in elem)))
                    setBrands([...new Set(res.data.filter((elem) => !('cartype' in elem)).map((ele) => ele.brand))])
                }).catch((err) => {
                    console.error(err);
                    toast.error("Failed to fetch vehicles");
                })
        }
        getVehicles()
    }, [])

    return (
        <section className=''>
            <VehicleHeading vehicle={'bike'} />

            <div className="w-4/5 mx-auto mt-6">
                <Filter vehicle={'bike'} brands={brands} />
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  sm:gap-3 sm:py-4 xl:gap-6 xl:w-4/5 mx-auto xl:px-4'>
                {
                    bikes.map((elem, index) => (
                        <Suspense key={index} fallback={<ContentLoader />}>
                            <BikeCard bike={elem} />
                        </Suspense>
                    ))
                }
            </div>
        </section >
    )
}

export default Bike