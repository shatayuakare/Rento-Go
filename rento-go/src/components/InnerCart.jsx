import React, { useEffect, useState } from 'react'
import BookForm from './forms/BookForm'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const InnerCart = () => {

    const [item, setItem] = useState([]);
    const [imgs, setImgs] = useState([]);
    const [mainImg, setMainImg] = useState("");
    const [specialize, setSpecialize] = useState([]);

    const { id } = useParams();


    const contentMaker = () => {
        const description = []
        if (item.brand) {
            description.push(`The ${item.brand} is a great vehicle with a`);
        }
        if (item.horsepower) {
            description.push(`horsepower output of ${item.horsepower} HP`);
        }
        if (item.engine) {
            description.push(` powerful ${item.engine} engine`);
        }
        if (item.mileage) {
            description.push(`an impressive mileage of ${item.mileage} miles`);
        }
        if (item.stock) {
            description.push(`stock number of ${item.stock}`);
        }
        if (item.gearbox) {
            description.push(`automatic ${item.gearbox} gearbox`);
        }
        if (item.drive) {
            description.push(`front-wheel drive for smooth handling`);
        }
        if (item.cartype) {
            description.push(`a sleek and stylish ${item.cartype} design`);
        }
        if (item.fuel) {
            description.push(`runs on ${item.fuel} fuel`);
        }
        if (item.doors) {
            description.push(`has ${item.doors} doors for ample space`);
        }
        if (item.luggage) {
            description.push(`offers a generous luggage capacity of ${item.luggage} liters`);
        }
        if (item.seats) {
            description.push(`comfortable seating for ${item.seats} passengers.`);
        }
        return description;
    }

    useEffect(() => {
        const getItem = async () => {
            await axios.get(`https://rento-go.onrender.com/vehicles/${id}`).then(res => {
                setItem(res.data)
                const { brand, horsepower, engine, mileage, stock, gearbox, drive, cartype, fuel, doors, luggage, seats } = res.data;
                setSpecialize({ brand, horsepower, engine, mileage, stock, gearbox, drive, cartype, fuel, doors, luggage, seats })
                setImgs(res.data.images)
                setMainImg(res.data.images[0])
            }).catch(err => toast.error(err.response.data.message))
        }

        setSpecialize(item.map((elem) => {
            return {
                brand: elem.brand,
                name: elem.name,
                engine: elem.engine
            }
        }))
        getItem()
    }, [])

    return (
        <section className="sm:px-2 pb-20 md:px-12 lg:px-20 xl:px-28 select-none">
            <div className="flex sm:flex-col lg:flex-row gap-4 pt-24 ">
                <div className="lg:w-3/5 flex flex-col gap-2 ">

                    <div className="border-2 bg-white sm:h-[38vh] sm:w-full  md:h-[48vh] lg:h-[54vh] overflow-hidden p-2 px-4">
                        <img className='mx-auto h-full' src={mainImg || item.images} alt="" />
                    </div>
                    <div className='border-2 flex overflow-x-auto gap-2 p-2 pb-0 bg-white sm:h-[12vh] md:h-[16vh] lg:h-[18vh]'>
                        {
                            imgs.map((img, index) => (
                                <img className='h-full'
                                    onClick={() => setMainImg(img)}
                                    src={img} key={index} alt="" />
                            ))
                        }
                    </div>
                </div>
                <div className="lg:w-2/5 border-2 sm:py-6 sm:px-4 md:px-6 rounded-lg bg-blue-50 content-center">
                    <BookForm data={item} />
                </div>
            </div>
            <div className="text-zinc-700">
                <div className="md:w-1/2">
                    <h5 className='text-3xl pt-12 pb-4 font-bold'>
                        {item.brand} {item.name} {item.model} {item.engine}
                    </h5>
                    <p className='text-zinc-500 font-semibold'>
                        {
                            contentMaker().join(' ')
                        }

                    </p>
                </div>

                <div className='md:w-1/2'>
                    <h6 className="text-2xl py-6 font-semibold">Specializations</h6>
                    {/* {
                        specialize
                    } */}
                    <table className='table w-1/2 border-0 capitalize'>
                        <tbody>
                            {
                                Object.entries(specialize).map(([key, value], index) => (
                                    <tr key={index}>
                                        <th>{key}</th>
                                        <th>{value}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default InnerCart