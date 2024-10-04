import React, { useEffect, useState } from 'react'
import CarCard from '../../components/CarCard'
import axios from 'axios';
import { toast } from 'react-toastify';
import VehicleHeading from '../../components/heading/VehicleHeading';
import Filter from '../../components/Filter';

const Cars = () => {

    const [car, setCar] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get("https://rento-go.onrender.com/vehicles").then((res) => {
                const data = res.data;
                setCar(data.filter((elem) => 'cartype' in elem))
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
                        <CarCard car={elem} key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default Cars