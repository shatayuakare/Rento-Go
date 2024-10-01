import React from 'react'

const VehicleHeading = () => {
    return (
        <div className="h-[45vh] content-center bg-zinc-900 bg-cover text-center text-white bg-center bg-scroll relative">
            <h4 className='capitalize font-bold text-5xl'>
                Rent a car rent our freedom
            </h4>

            <img className='absolute left-0 [transform:rotateY(180deg)] bottom-0 h-[55%]' src="https://www.pngfind.com/pngs/b/387-3879100_bmw-7-series-2018-bmw-5-series-black.png" alt="" />
            <img className='absolute right-0 bottom-0 h-[55%]' src="https://www.pngfind.com/pngs/b/387-3879100_bmw-7-series-2018-bmw-5-series-black.png" alt="" />
        </div>
    )
}

export default VehicleHeading