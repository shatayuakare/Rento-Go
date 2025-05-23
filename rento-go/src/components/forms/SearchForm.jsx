import React from 'react'
import cities from "../../api/availableCities.json"
import { Link } from 'react-router-dom'

const SearchForm = () => {


    return (
        <form className='flex gap-4 text-gray-800 w-full' action="" >
            <div className='flex-1'>
                <label htmlFor="location" className="label">Location</label>
                <select name="location" id="location" className='select w-full select-bordered bg-zinc-100 h-auto rounded-md  min-h-0 py-2'
                    defaultValue={'Nagpur'}>
                    {
                        cities.map((elem, index) => <option key={index}>{elem.city}</option>)
                    }
                </select>
            </div>
            <div className='flex-1'>
                <label htmlFor="pickup" className="label">Pick-up</label>
                <select name="pickup" id="pickup" className='select select-bordered bg-zinc-100 h-auto min-h-0 rounded-md w-full py-2'
                    defaultValue={'Nagpur'}>
                    {
                        cities.map((elem, index) => <option key={index}>{elem.city}</option>)
                    }
                </select>
            </div>
            <div className='flex-1'>
                <label htmlFor="date" className="label">Date</label>
                <input className="input bg-zinc-100 py-2 rounded-md w-full" type="date" name="date" id="date" placeholder='date' />
            </div>

            <div className='flex-1 flex flex-col justify-end'>
                <Link to={"/cars"} className='btn text-white  rounded-md p-4'>
                    Search Now
                </Link>
            </div>
        </form >
    )
}

export default SearchForm