import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios'
import { toast } from 'react-toastify'
import { server } from '../../utils/Constants'

const EditVehicleForm = ({ data }) => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const vehicle = data.cartype ? 'car' : 'bike';

    const [loader, setLoader] = useState(false)

    const [brand, setBrand] = useState(data.brand)
    const [model, setModel] = useState(data.model)
    const [owner, setOwner] = useState(data.owner)
    const [fuel, setFuel] = useState(data.fuel)
    const [number, setNumber] = useState(data.number)

    const [gearbox, setGearbox] = useState(data.gearbox)
    const [horsepower, setHorsePower] = useState(data.horsepower)
    const [engine, setEngine] = useState(data.engine)
    const [mileage, setMileage] = useState(data.mileage)
    const [stock, setStock] = useState(data.stock)
    const [seats, setSeats] = useState(data.seats)
    const [drive, setDrive] = useState(data.drive)
    const [luggage, setLuggage] = useState(data.luggage)
    const [cartype, setCartype] = useState(data.cartype)
    const [price, setPrice] = useState(data.price)

    const [images, setImages] = useState(data.images)
    const [image, setImage] = useState("")

    const fuels = ["petrol", "diesel", "hybrid", "CNG", "electric", "hydrogen"]
    const cartypes = ['hatchback', 'sedan', 'convertable', 'sport', 'suv']


    const imageAddHandler = (event) => {
        event.preventDefault()
        setImages([...images, image])
        setImage("")
    }

    const removeImage = (event, index) => {
        event.preventDefault()
        setImages(images.filter((_, i) => i !== index))
    }


    const updateHandler = async (event) => {
        event.preventDefault();
        setLoader(true)
        if (cartype !== '') {
            const carDetails = {
                images, brand, model, fuel, owner, number, cartype, luggage, horsepower, engine, mileage, drive, stock, price, seats, gearbox
            }
            console.log(data._id)

            await axios.put(`${server}/vehicles/updateCar/${data._id}`, carDetails).then(res => {
                setLoader(false)
                document.getElementById('editVehicleForm').close()
                toast.success(res.data.message)
            }).catch(error => toast.error(error.response.data.message));
            setLoader(false)
        } else {
            const bikeDetails = {
                images, brand, model, fuel, owner, number, engine, mileage, stock, price, gearbox
            }
            await axios.put(`${server}/vehicles/updateBike/${data._id}`, bikeDetails).then(res => {
                setLoader(false)
                document.getElementById('editVehicleForm').close()
                toast.success(res.data.message)
            }).catch(error => toast.error(error.response.data.message));
        }
    }

    return (
        <dialog id="editVehicleForm" className="modal modal-bottom sm:modal-middle text-sm capitalize">
            <div className="modal-box bg-white p-3 shadow min-w-[75%] w-2/5 capitalize">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                {vehicle === "car" ?
                    <form className='w-full' action="" onSubmit={updateHandler}>
                        <div className="flex gap-2">
                            <div className='w-full'>
                                <label htmlFor="images" className="label">Vehicle Images</label>
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
                        <div className='p-1 flex gap-2 mt-1'>
                            {
                                images && images.map((elem, index) =>
                                    <div className="relative" key={index}>
                                        <img className='h-20' src={elem} />
                                        <button className="btn btn-sm btn-ghost p-0 absolute h-6 rounded-full w-6 bg-white hover:bg-zinc-100 font-bold top-0 right-0"
                                            onClick={() => removeImage(index)}>
                                            <i className='bx bx-x text-xl -p-2 leading-none'></i>
                                        </button>
                                    </div>
                                )
                            }
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label htmlFor="owner" className="label">Vehicle Owner</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="owner" id="owner" placeholder='Enter vehicle owner name...' value={owner}
                                    onChange={(event) => setOwner(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="brand" className="label">Vehicle Brand</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="brand" id="brand" placeholder='Enter vehicle Brand...' value={brand}
                                    onChange={(event) => setBrand(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="model" className="label">Vehicle Model</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="model" id="engine" placeholder='Enter vehicle Model...' value={model}
                                    onChange={(event) => setModel(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="number" className="label">Vehicle Number</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="number" id="engine" placeholder='Enter vehicle number...' value={number}
                                    onChange={(event) => setNumber(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="engine" className="label">Vehicle Engine</label>
                                <input className='input input-sm w-full bg-zinc-100' type="tel" name="engine" id="engine" placeholder='Enter vehicle Engine power...' value={engine}
                                    onChange={(event) => setEngine(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="horse" className="label">Vehicle Horsepower</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="horse" id="horse" placeholder='Enter vehicle Horse power...' value={horsepower}
                                    onChange={(event) => setHorsePower(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="mileage" className="label">Vehicle Mileage</label>
                                <input className='input input-sm w-full bg-zinc-100' type="tel" name="mileage" id="mileage" placeholder='Enter vehicle Mileage ...' value={mileage}
                                    onChange={(event) => setMileage(event.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label htmlFor="gerabox" className="label">Vehicle Gearbox</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="gearbox" id="gearbox" placeholder='Enter vehicle Gearbox...' value={gearbox || 5}
                                        onChange={(event) => setGearbox(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="seats" className="label">Vehicle Seats</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="seats" id="seats" placeholder='Enter seats in vahicle...' value={seats || 2}
                                        onChange={(event) => setSeats(event.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="type" className="label">Vehicle Type</label>
                                    <select className='select select-sm w-full bg-zinc-100 capitalize' name="type" id="type" defaultValue={cartype}
                                        onChange={(event) => setCartype(event.currentTarget.value)}>
                                        <option value={'none'}>--select--</option>

                                        {
                                            cartypes.map((elem, i) =>
                                                <option value={elem} key={i}>{elem}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="fuel" className="label">Vehicle Fuel</label>

                                    <select className='select select-sm w-full bg-zinc-100 capitalize' name="fuel" id="fuel" defaultValue={fuel || 'none'}
                                        onChange={(event) => setFuel(event.currentTarget.value)}>
                                        <option value={'none'}>-- select --</option>
                                        {
                                            fuels.map((elem, index) =>
                                                <option value={elem} key={index}>{elem}</option>
                                            )
                                        }

                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="mode" className="label">Vehicle Drive Mode</label>
                                <select className='select select-sm w-full bg-zinc-100 capitalize' name="model" id="mode" defaultValue={drive || "none"}
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
                                    <label htmlFor="luggage" className="label">Vehicle Luggage Space</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="luggage" id="luggage" placeholder='Enter Luggage in vahicle...' value={luggage || 1200}
                                        onChange={(event) => setLuggage(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="stock" className="label">Vehicle Engine Stock</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="stock" id="stock" placeholder='Enter Stock in engine...' value={stock || 2}
                                        onChange={(event) => setStock(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="label">Vehicle Price (per day)</label>
                                <input className='input input-sm w-full bg-zinc-100' type="number" name="price" id="price" placeholder='Enter price...' value={price || 2499}
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
                                        <span>Update Car Details</span>
                                }
                            </button>
                        </div>
                    </form>

                    :

                    <form className='w-full' action="" onSubmit={updateHandler}>
                        <div className="flex gap-2">
                            <div className='w-full'>
                                <label htmlFor="images" className="label">Vehicle Images</label>
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
                        <div className='p-1 flex gap-2 mt-1'>
                            {
                                images && images.map((elem, index) =>
                                    <div className="relative" key={index}>
                                        <img className='h-20' src={elem}  />
                                        <button className="btn btn-sm btn-ghost p-0 absolute h-6 rounded-full w-6 bg-white hover:bg-zinc-100 font-bold top-0 right-0"
                                            onClick={() => removeImage(index)}>
                                            <i className='bx bx-x text-xl -p-2 leading-none'></i>
                                        </button>
                                    </div>
                                )
                            }
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label htmlFor="owner" className="label">Vehicle Owner</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="owner" id="owner" placeholder='Enter vehicle Owner Name ...' value={owner}
                                    onChange={(event) => setOwner(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="brand" className="label">Vehicle Brand</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="brand" id="engine" placeholder='Enter vehicle brand...' value={brand}
                                    onChange={(event) => setBrand(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="model" className="label">Vehicle Model</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="model" id="model" placeholder='Enter vehicle Model...' value={engine}
                                    onChange={(event) => setModel(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="number" className="label">Vehicle Number</label>
                                <input className='input input-sm w-full bg-zinc-100' type="text" name="number" id="number" placeholder='Enter vehicle number...' value={number}
                                    onChange={(event) => setNumber(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="engine" className="label">Vehicle Engine</label>
                                <input className='input input-sm w-full bg-zinc-100' type="tel" name="engine" id="engine" placeholder='Enter vehicle Engine power...' value={engine}
                                    onChange={(event) => setEngine(event.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="mileage" className="label">Vehicle Mileage</label>
                                <input className='input input-sm w-full bg-zinc-100' type="tel" name="horse" id="mileage" placeholder='Enter vehicle Mileage ...' value={mileage}
                                    onChange={(event) => setMileage(event.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label htmlFor="gearbox" className="label">Vehicle Gearbox</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="gearbox" id="gearbox" placeholder='Enter vehicle Gearbox...' value={gearbox || 5}
                                        onChange={(event) => setGearbox(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="fuel" className="label">Vehicle Fuel</label>

                                    <select className='select select-sm w-full bg-zinc-100 capitalize' name="fuel" id="fuel" defaultValue={"none"}
                                        onChange={(event) => setFuel(event.currentTarget.value)}>
                                        <option value={'none'}>-- select --</option>
                                        {
                                            fuels.map((elem, index) =>
                                                <option value={elem} key={index}>{elem}</option>
                                            )
                                        }

                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label htmlFor="stock" className="label">Vehicle Engine Stock</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="stock" id="stock" placeholder='Enter Stock in engine...' value={stock || 2}
                                        onChange={(event) => setStock(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="price" className="label">Vehicle Price (per day)</label>
                                    <input className='input input-sm w-full bg-zinc-100' type="number" name="price" id="price" placeholder='Enter price...' value={price || 2499}
                                        onChange={(event) => setPrice(event.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='text-center mt-6'>
                            <button className="btn h-9 btn-ghost bg-green-500 hover:bg-green-700 text-white btn-wide" type='submit'>
                                {
                                    loader ?
                                        <span className="loading loading-bars loading-md"></span>
                                        :
                                        <span>Update Bike Details</span>
                                }
                            </button>
                        </div>
                    </form>
                }
            </div>
        </dialog>
    )
}

export default EditVehicleForm