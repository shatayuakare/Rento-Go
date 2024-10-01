import React, { useEffect, useState } from 'react'
import CarCard from '../../components/CarCard'
import axios from 'axios';
import { toast } from 'react-toastify';
import VehicleHeading from '../../components/heading/VehicleHeading';
import Filter from '../../components/Filter';

const Cars = () => {

    const [car, setCar] = useState([]);

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get("http://localhost:8080/vehicles").then((res) => {
                setCar(res.data)
            }).catch((err) => toast.error(err.response.data.message))
        }
        getVehicles()
    }, [])



    return (
        <section className='pt-20'>
            <VehicleHeading />

            <div className="w-4/5 mx-auto mt-6">
                <Filter vehicle={'car'} />
            </div>
            {/* <div className="flex bg-blue-200 p-4 justify-between w-4/5 mx-auto my-3">
                <div>
                    filter
                </div>
                <div>
                    Price Sort
                </div>
            </div> */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-3 sm:py-4 xl:gap-6 xl:w-4/5 mx-auto xl:px-4'>

                {
                    car.map((elem, index) => (
                        <CarCard car={elem} key={index} />
                    ))
                }
                {
                    car.map((elem, index) => (
                        <CarCard car={elem} key={index} />
                    ))
                }
                {
                    car.map((elem, index) => (
                        <CarCard car={elem} key={index} />
                    ))
                }
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