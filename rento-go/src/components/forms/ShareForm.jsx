import React, { useState } from 'react'
import NewVehicleForm from './NewVehicleDetailForm'

const ShareForm = ({ vehicle }) => {
    const [owner, setOwner] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [number, setNumber] = useState('')
    const [fuel, setFuel] = useState('')

    const [details, setDetails] = useState([]);

    const [error, setError] = useState(null);


    const fuels = ["petrol", "diesel", "hybrid", "CNG", "electric", "hydrogen"]


    const shareHandler = (event) => {
        event.preventDefault()

        if (owner === '') return setError("Please Enter ownewr name")
        if (brand === '') return setError("Please Enter brand")
        if (model === '') return setError("Please Enter Model")
        if (number === '') return setError("Please Enter Number")
        if (fuel === '') return setError("Please Enter Fuel")

        const data = {
            owner: owner.toLowerCase(),
            brand: brand.toLowerCase(),
            model: model.toLowerCase(),
            number: number.toLowerCase(),
            fuel: fuel.toLowerCase()
        }
        setDetails(data);


        document.getElementById('newVehicleDetailForm').showModal()

        setOwner('')
        setBrand('')
        setModel('')
        setNumber('')
        setFuel('')
    }

    return (
        <>
            <form className='grid gap-8' action="" onSubmit={shareHandler} >
                <div className='text-zinc-500'>
                    <h4 className='text-2xl font-semibold text-zinc-700'>Get started</h4>
                    Submit the form to the start
                </div>

                <div>
                    <label htmlFor="owner" className="lebel required text-sm">Vehicle Owner</label>
                    <input className='input rounded-none w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="text" name="owner" id="owner"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="brand" className="lebel required text-sm">Vehicle Brand</label>
                    <input className='input rounded-none w-full h-9 ps-0    bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="text" name="brand" id="brand"
                        value={brand}
                        onChange={(event) => setBrand(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="model" className="lebel required text-sm">Vehicle Model</label>
                    <input className='input rounded-none w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="text" name="model" id="model"
                        value={model}
                        onChange={(event) => setModel(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="number" className="lebel required text-sm">Vehicle Number</label>
                    <input className='input rounded-none w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="text" name="number" id="number"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="fuel" className="lebel required text-sm">Vehicle Fuel</label>

                    <select className='select select-sm w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600 capitalize rounded-none' name="fuel" id="fuel" defaultValue={"none"}
                        onChange={(event) => setFuel(event.currentTarget.value)}>
                        <option value={'none'}>-- select --</option>
                        {
                            fuels.map((elem, index) =>
                                <option value={elem} key={index}>{elem}</option>
                            )
                        }

                    </select>
                </div>

                {
                    error && <div className="text-red-500">{error}</div>
                }

                <div className='text-end'>
                    <button className='btn text-white rounded-md px-10' type='submit'>
                        <img className='h-5' src="https://www.pngall.com/wp-content/uploads/13/White-Arrow-PNG-Image-HD.png" alt="" />
                    </button>
                </div>
            </form>
            <NewVehicleForm data={details} vehicle={vehicle} />
        </>
    )
}

export default ShareForm