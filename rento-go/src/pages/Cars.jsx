import React, { useEffect, useState } from 'react'
import CarCard from '../components/CarCard'
import axios from 'axios';
import { toast } from 'react-toastify';

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
        <section className='content-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-3 sm:py-4 xl:gap-6 sm:mx-2 xl:mx-28'>

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