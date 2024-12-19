import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from "axios"
import { toast } from "react-toastify"

const NewVehicleForm = ({ data, vehicle }) => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [loader, setLoader] = useState(false)

    const [gearbox, setGearbox] = useState("")
    const [horsepower, setHorsePower] = useState("")
    const [engine, setEngine] = useState("")
    const [mileage, setMileage] = useState("")
    const [stock, setStock] = useState("")
    const [seats, setSeats] = useState("")
    const [price, setPrice] = useState("")

    const [drive, setDrive] = useState("")
    const [luggage, setLuggage] = useState("")
    const [cartype, setCarType] = useState("")

    const [images, setImages] = useState([])
    const [image, setImage] = useState("")

    const imageAddHandler = (event) => {
        event.preventDefault()
        setImages([...images, image])
        setImage("")
    }

    console.log(authUser)

    const addNewCarHandler = async (event) => {
        event.preventDefault()
        setLoader(true)

        const carDetail = {
            UID: authUser._id, images, brand: data.brand, model: data.model, fuel: data.fuel, owner: data.owner, number: data.number,
            cartype, luggage, horsepower, engine, mileage, drive, stock, price, seats, gearbox
        }
        await axios.post("http://localhost:8080/vehicles/newCar", carDetail).then(async (res) => {
            // console.log(res.data)
            await axios.put(`http://localhost:8080/auth/${authUser._id}`, {
                VID: res.data.createCar._id
            }
            ).then(r => {
                console.log(r.data)
            }).catch(e => console.error(e.message))
            toast.success(res.data.message)
            setLoader(false)
        }).catch(err => console.error('car', err.message));
        setLoader(false)
    }

    const addNewBikeHandler = async (event) => {
        event.preventDefault()
        setLoader(true)
        const bikeDetail = {
            UID: authUser._id, images, brand: data.brand, model: data.model, fuel: data.fuel, owner: data.owner, number: data.number,
            engine, mileage, stock, price, gearbox
        }

        await axios.post("http://localhost:8080/vehicles/newBike", bikeDetail).then((res) => {
            setLoader(false)
            toast.success(res.data.message)
        }).catch(err => console.error(err.message));
        setLoader(false)
    }

    const removeImage = (event, index) => {
        event.preventDefault()
        setImages(images.filter((_, i) => i !== index))
    }


    return (
        <dialog id="newVehicleDetailForm" className="modal backdrop-blur modal-bottom sm:modal-middle lowercase">
            <div className="modal-box min-w-[75%] w-2/5 bg-white bg-opacity-25">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <i className='bx bx-x text-2xl font-bold'></i>
                    </button>
                </form>

                {vehicle === "car" ?
                    <form className='' action="" onSubmit={addNewCarHandler}>
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
                        <div className='p-1 flex gap-2 mt-2'>
                            {
                                images && images.map((elem, index) =>
                                    <div className="relative" key={index}>
                                        <img className='h-24' src={elem} />
                                        <button className="btn btn-sm btn-ghost p-0 absolute h-6 rounded-full w-6 bg-white hover:bg-zinc-100 font-bold top-0 right-0"
                                            onClick={() => removeImage(index)}>
                                            <i className='bx bx-x text-xl -p-2 leading-none'></i>
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="engine" className="label">Car Engine</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Engine power...' value={engine}
                                    onChange={(event) => setEngine(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="horse" className="label">Car Horsepower</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="horse" id="horse" placeholder='Enter vehicle Horse power...' value={horsepower}
                                    onChange={(event) => setHorsePower(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="mileage" className="label">Car Mileage</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="horse" id="mileage" placeholder='Enter vehicle Mileage ...' value={mileage}
                                    onChange={(event) => setMileage(event.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label htmlFor="engine" className="label">Car Gearbox</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Gearbox...' value={gearbox}
                                        onChange={(event) => setGearbox(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="seats" className="label">Car Seats</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="seats" id="seats" placeholder='Enter seats in vahicle...' value={seats}
                                        onChange={(event) => setSeats(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="fuel" className="label">Car Type</label>
                                <select className='select select-sm w-full bg-zinc-100 capitalize' name="fuel" id="fuel" defaultValue={cartype}
                                    onChange={(event) => setCarType(event.currentTarget.value)}>
                                    <option value={'none'}>--select--</option>
                                    <option value={'hatchback'}>Hatchback</option>
                                    <option value={'sedan'}>Sedan</option>
                                    <option value={'convertable'}>Convertable</option>
                                    <option value={'sport'}>Sport Car</option>
                                    <option value={'suv'}>SUV</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="mode" className="label">Car Drive Mode</label>
                                <select className='select select-sm w-full bg-zinc-100 capitalize' name="model" id="mode" defaultValue={drive}
                                    onChange={(event) => setDrive(event.currentTarget.value)}>
                                    <option value={'none'}>--select--</option>
                                    <option value={'awd'} >All Will Drive</option>
                                    <option value={'fwd'} >Front Will Drive</option>
                                    <option value={'rwd'} >Rear Will Drive</option>
                                    <option value={'4wd'} >4 Will Drive</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="luggage" className="label">Car Luggage Space</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="luggage" id="luggage" placeholder='Enter Luggage in vahicle...' value={luggage}
                                        onChange={(event) => setLuggage(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="stock" className="label">Car Engine Stock</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="stock" id="stock" placeholder='Enter Stock in engine...' value={stock}
                                        onChange={(event) => setStock(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="label">Car Price (per day)</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="price" id="price" placeholder='Enter price...' value={price}
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className='text-center mt-6'>
                            <button className="btn h-9 btn-ghost bg-green-500 hover:bg-green-700 text-white btn-wide" type='submit'>
                                {
                                    loader ?
                                        <span className="loading loading-bars loading-md"></span>
                                        :
                                        <span>Add Car</span>
                                }
                            </button>
                        </div>
                    </form>

                    :

                    <form className='' action="" onSubmit={addNewBikeHandler}>
                        <div className="flex gap-4">
                            <div className='w-full'>
                                <label htmlFor="images" className="label">Bike Images</label>
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
                        <div className='p-1 flex gap-2 mt-2'>
                            {
                                images && images.map((elem, index) =>
                                    <div className="relative" key={index}>
                                        <img className='h-24' src={elem} />
                                        <button className="btn btn-sm btn-ghost p-0 absolute h-6 rounded-full w-6 bg-white hover:bg-zinc-100 font-bold top-0 right-0"
                                            onClick={() => removeImage(index)}>
                                            <i className='bx bx-x text-xl -p-2 leading-none'></i>
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="engine" className="label">Bike Engine</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Engine power...' value={engine}
                                    onChange={(event) => setEngine(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="mileage" className="label">Bike Mileage</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="horse" id="mileage" placeholder='Enter vehicle Mileage ...' value={mileage}
                                    onChange={(event) => setMileage(event.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label htmlFor="engine" className="label">Bike Gearbox</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="engine" id="engine" placeholder='Enter vehicle Gearbox...' value={gearbox}
                                        onChange={(event) => setGearbox(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="stock" className="label">Bike Engine Stock</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="stock" id="stock" placeholder='Enter Stock in engine...' value={stock}
                                        onChange={(event) => setStock(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="label">Bike Price (per day)</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="price" id="price" placeholder='Enter price...' value={price}
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className='text-center mt-6'>
                            <button className="btn h-9 btn-ghost bg-green-500 hover:bg-green-700 text-white btn-wide" type='submit'>
                                {
                                    loader ?
                                        <span className="loading loading-bars loading-md"></span>
                                        :
                                        <span>Add Bike</span>
                                }
                            </button>
                        </div>
                    </form>
                }
            </div>
        </dialog>
    )
}

export default NewVehicleForm