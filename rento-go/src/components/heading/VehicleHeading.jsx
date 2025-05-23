import React from 'react'



const VehicleHeading = ({ vehicle }) => {

    return (

        <div className={`bg-cover text-center bg-center bg-scroll  ${vehicle === 'car' ? "bg-[url('https://wallpapercave.com/wp/wp3720759.jpg')]" : "bg-[url('https://cdn.wallpapersafari.com/16/9/6ONnED.jpg')]"}
        `}>
            <div className="bg-black bg-opacity-55 pt-10">

            <div className="h-[50vh] content-center" >
                <h4 className='capitalize font-bold text-5xl text-zinc-100'>
                    Rent a {vehicle} rent our freedom
                </h4>
            </div>
            </div>
        </div>
    )
}

export default VehicleHeading