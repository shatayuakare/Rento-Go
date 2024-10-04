import React from 'react'



const VehicleHeading = ({ vehicle }) => {

    return (

        <div className={`h-[50vh] bg-cover text-center bg-center bg-scroll  ${vehicle === 'car' ? "bg-[url('https://wallpapercave.com/wp/wp3720759.jpg')]" : "bg-[url('https://cdn.wallpapersafari.com/16/9/6ONnED.jpg')]"}
        `}>
            <div className="bg-black content-center h-full bg-opacity-55">
                <h4 className='capitalize font-bold text-5xl text-zinc-100'>
                    Rent a {vehicle} rent our freedom
                </h4>
            </div>
        </div>
    )
}

export default VehicleHeading