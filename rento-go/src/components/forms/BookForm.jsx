import React from 'react'

const BookForm = () => {

    const citys = [
        "Nagpur",
        "Amravatti",
        "Mumbai",
        "Pune",
        "Nashik",
    ]

    const fav = false

    return (
        <form className='flex flex-col gap-6 text-zinc-700 relative pt-6' action="">

            <button className='btn btn-ghost bg-zinc-100 btn-circle text-3xl p-2 border-2 border-zinc-200 ms-auto absolute top-0 right-0'>
                {
                    fav ?
                        <i className='bx bxs-heart'></i>
                        :
                        <i className='bx bx-heart'></i>
                }
            </button>
            <div>
                <label htmlFor="location" className="label">
                    Location
                </label>
                <select name="location" id="location" className='select w-full select-bordered bg-zinc-100 h-auto rounded-md  min-h-0 py-2'
                    defaultValue={'Nagpur'}>
                    {
                        citys.map((elem, index) => <option key={index}>{elem}</option>)
                    }
                </select>
            </div>

            <div>
                <label className='label' htmlFor="pickup-date">
                    Pick-Up
                </label>
                <input className='input w-full bg-zinc-100 h-10' type="datetime-local" name="pickup-date" id='pickup-date' />
            </div>

            <div>
                <label className='label' htmlFor="drop-off">
                    Drop-Off
                </label>
                <input className='input w-full bg-zinc-100 h-10' type="datetime-local" name="drop-off" id='drop-off' />
            </div>
            <div className='flex justify-between'>
                <div>
                    <div className="text-lg font-semibold">Duration</div>
                    <div className='text-zinc-500'>
                        7.57 Hours
                    </div>
                </div>
                <div className="p-2 h-12 text-2xl px-4 rounded-md bg-zinc-100 font-bold">
                    $36.00
                </div>

            </div>


            <button className="btn w-full text-white">
                Book Now
            </button>
        </form>
    )
}

export default BookForm