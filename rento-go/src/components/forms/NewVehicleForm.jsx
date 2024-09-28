import React, { useEffect, useState } from 'react'
import vehicleBrands from "../../api/vehicleBrands.json"

const NewVehicleForm = () => {

    const [carList, setCarList] = useState([])
    const [bikeList, setBikeList] = useState([])

    const fuels = ["petrol", "diesel", "hybrid", "CNG", "electric", "hydrogen"]

    useEffect(() => {
        const cars = vehicleBrands.filter(elem => elem.type === "car")
        setCarList(cars)
        const bikes = vehicleBrands.filter(elem => elem.type === "bike")
        setBikeList(bikes)
    }, [])


    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [fuel, setFuel] = useState("")
    const [gearbox, setGearbox] = useState("")
    const [horsePower, setHorsePower] = useState("")
    const [engine, setEngine] = useState("")
    const [mileage, setMileage] = useState("")
    const [stock, setStock] = useState("")
    const [seats, setSeats] = useState("")
    const [price, setPrice] = useState("")

    // cars 
    const [drive, setDrive] = useState("")
    const [luggage, setLuggage] = useState("")
    const [doors, setDoors] = useState("")
    const [cartype, setCarType] = useState("")

    const [images, setImages] = useState([])
    const [image, setImage] = useState("")

    const type = "car"


    const imageAddHandler = (event) => {
        event.preventDefault()
        setImages([...images, image])
        setImage("")
    }

    const AddVehicleHandler = () => {
        const data = {
            images, name, brand, gearbox, horsepower: horsePower, engine, seats, stock, price, fuel
        }

        console.log(data)
    }

    return (
        <>
            {type === "car" ?
                <form className='' action="" onSubmit={AddVehicleHandler}>
                    <div className="flex gap-4">
                        <div className='w-full'>
                            <label htmlFor="images" className="label">Car Images</label>
                            <input className='input input-sm w-full bg-zinc-100' type="url" name="imaes" id="images"
                                placeholder='Enter image url'
                                value={image}
                                onChange={event => setImage(event.target.value)}
                            />
                        </div>
                        <div className='w-fit flex items-end'>
                            <button className="btn btn-circle btn-sm btn-ghost bg-blue-500 hover:bg-blue-600 text-white " type='button' onClick={imageAddHandler}>
                                <i className='bx bx-plus-medical'></i>
                            </button>
                        </div>
                    </div>
                    <div className='p-1 flex'>
                        {
                            images && images.map((elem, index) => <img className='h-24' src={elem} key={index} />)
                        }
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="brand" className="label">Car Brand</label>
                            <select className='select select-sm w-full bg-zinc-100 capitalize' name="brand" id="brand" defaultValue={brand}
                                onChange={(event) => setBrand(event.currentTarget.value)}>
                                <option value={brand || 'none'}>--select--</option>
                                {
                                    carList.map((elem, index) => (
                                        <option value={elem.brand} key={index}>{elem.brand}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name" className="label">Car Name</label>
                            <input className='input input-sm w-full bg-zinc-100' type="text" name="name" id="name" placeholder='Enter vehicle name...'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="fuel" className="label">Car Fuel</label>
                            <select className='select select-sm w-full bg-zinc-100 capitalize' name="fuel" id="fuel" defaultValue={fuel || "none"}
                                onChange={(event) => setFuel(event.currentTarget.value)}>
                                <option value={'none'}>--select--</option>
                                {
                                    fuels.map((elem, index) => (
                                        <option value={elem} key={index}>{elem}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="engine" className="label">Car Engine</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Engine power...' value={engine}
                                onChange={(event) => setEngine(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="horse" className="label">Car Horsepower</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="horse" id="horse" placeholder='Enter vehicle Horse power...' value={horsePower}
                                onChange={(event) => setHorsePower(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="mileage" className="label">Car Mileage</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="horse" id="mileage" placeholder='Enter vehicle Mileage ...' value={mileage}
                                onChange={(event) => setMileage(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="engine" className="label">Car Gearbox</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Gearbox...' value={gearbox || 5}
                                onChange={(event) => setGearbox(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="fuel" className="label">Car Type</label>
                            <select className='select select-sm w-full bg-zinc-100 capitalize' name="fuel" id="fuel" defaultValue={cartype || "none"}
                                onChange={(event) => setCarType(event.currentTarget.value)}>
                                <option value={'none'}>--select--</option>
                                <option value={'hatchback'}>Hatchback</option>
                                <option value={'sedan'}>Sedan</option>
                                <option value={'convertable'}>Convertable</option>
                                <option value={'sport'}>Sport Car</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="fuel" className="label">Car Drive</label>
                            <select className='select select-sm w-full bg-zinc-100 capitalize' name="fuel" id="fuel" defaultValue={drive || "none"}
                                onChange={(event) => setDrive(event.currentTarget.value)}>
                                <option value={'none'}>--select--</option>
                                <option value={'awd'} >All Will Drive</option>
                                <option value={'fwd'} >Front Will Drive</option>
                                <option value={'rwd'} >Rear Will Drive</option>
                                <option value={'4wd'} >4 Will Drive</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="luggage" className="label">Car Luggage Space</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="luggage" id="luggage" placeholder='Enter Luggage in vahicle...' value={luggage || 1200}
                                onChange={(event) => setLuggage(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="seats" className="label">Car Seats</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="seats" id="seats" placeholder='Enter seats in vahicle...' value={seats || 2}
                                onChange={(event) => setSeats(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="stock" className="label">Car Stock</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="stock" id="stock" placeholder='Enter Stock in engine...' value={stock || 2}
                                onChange={(event) => setStock(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="label">Car Price (per day)</label>
                            <input className='input input-sm w-full bg-zinc-100' type="number" name="price" id="price" placeholder='Enter price...' value={price || 2499}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className='text-center mt-6'>
                        <button className="btn btn-primary text-white btn-wide" type='submit'>
                            Add Vehicle
                        </button>
                    </div>
                </form>

                :

                <form className='grid grid-cols-2 gap-4' action="">
                    <div>
                        <label htmlFor="brand" className="label">Vehicle Brand</label>
                        <select className='select w-full bg-zinc-100 capitalize' name="brand" id="brand" defaultValue={brand}
                            onChange={(event) => setBrand(event.currentTarget.value)}>
                            <option value={brand || 'none'}>--select--</option>
                            {
                                carList.map((elem, index) => (
                                    <option value={elem.brand} key={index}>{elem.brand}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="name" className="label">Vehicle Name</label>
                        <input className='input w-full bg-zinc-100' type="text" name="name" id="name" placeholder='Enter vehicle name...'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="fuel" className="label">Vehicle Fuel</label>
                        <select className='select w-full bg-zinc-100 capitalize' name="fuel" id="fuel" defaultValue={fuel || "none"}
                            onChange={(event) => setFuel(event.currentTarget.value)}>
                            <option value={'none'}>--select--</option>
                            {
                                fuels.map((elem, index) => (
                                    <option value={elem} key={index}>{elem}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="engine" className="label">Vehicle Gearbox</label>
                        <input className='input w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Gearbox...' value={gearbox || 5}
                            onChange={(event) => setGearbox(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="engine" className="label">Vehicle Engine</label>
                        <input className='input w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Engine power...' value={engine}
                            onChange={(event) => setEngine(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="horse" className="label">Vehicle Horsepower</label>
                        <input className='input w-full bg-zinc-100' type="number" name="horse" id="horse" placeholder='Enter vehicle Horse power...' value={horsePower}
                            onChange={(event) => setHorsePower(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="mileage" className="label">Vehicle Mileage</label>
                        <input className='input w-full bg-zinc-100' type="number" name="horse" id="mileage" placeholder='Enter vehicle Mileage ...' value={mileage}
                            onChange={(event) => setMileage(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="seats" className="label">Vehicle Seats</label>
                        <input className='input w-full bg-zinc-100' type="number" name="seats" id="seats" placeholder='Enter seats in vahicle...' value={seats || 2}
                            onChange={(event) => setSeats(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="stock" className="label">Vehicle Stock</label>
                        <input className='input w-full bg-zinc-100' type="number" name="stock" id="stock" placeholder='Enter Stock in engine...' value={stock || 2}
                            onChange={(event) => setStock(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="label">Vehicle Price(per day)</label>
                        <input className='input w-full bg-zinc-100' type="number" name="price" id="price" placeholder='Enter price...' value={price || 2499}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary text-white btn-wide" type='submit'>
                            Add Vehicle
                        </button>
                    </div>
                </form>}
        </>
    )
}

export default NewVehicleForm