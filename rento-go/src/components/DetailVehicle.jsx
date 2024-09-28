import React from 'react'
import cities from "../api/availableCities.json"

const DetailVehicle = () => {

    return (
        <section>
            <div className='flex'>
                <div className="w-[60%]">

                </div>
                <div className="w-[40%] bg-zinc-200">

                    <form action="">
                        <div>
                            <label htmlFor="location" className="label">
                                <i className='bx bxs-map'></i>  Location
                            </label>
                            <select name="location" id="location" className='select select-bordered bg-zinc-100 h-auto min-h-0 rounded-md w-full py-2'
                                defaultValue={'Nagpur'}>
                                {
                                    cities.map((elem, index) => <option key={index}>{elem.city}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pickup" className="label">
                                <i className='bx bxs-map'></i>  Pickup
                            </label>
                            <select name="pickup" id="pickup" className='select select-bordered bg-zinc-100 h-auto min-h-0 rounded-md w-full py-2'
                                defaultValue={'Nagpur'}>
                                {
                                    cities.map((elem, index) => <option key={index}>{elem.city}</option>)
                                }
                            </select>
                        </div>


                    </form>
                </div>
            </div>
        </section>
    )
}

export default DetailVehicle