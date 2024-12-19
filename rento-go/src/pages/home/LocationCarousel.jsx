import React from 'react'
import cities from "../../api/availableCities.json"


const LocationCarousel = () => {
    return (
        <section className="content-center bg-[url('https://w0.peakpx.com/wallpaper/997/21/HD-wallpaper-carbon-world-map-grunge-art-carbon-background-creative-black-world-map-travel-concepts-world-map-concepts-world-map.jpg?format=webp&quality=auto')] bg-cover bg-fixed bg-center text-zinc-100 min-h-[65vh]">

            <div className="sm:w-4/5 md:w-4/5  text-center mx-auto">
                <h4 className='text-center sm:text-3xl md:text-5xl font-bold  '>Local service we provide</h4>

                <div className="flex gap-6 mt-6 sm:flex-col flex-wrap lg:flex-row pt-8">

                    {
                        cities.map((elem, index) => (
                            <div className="flex-1 text-zinc-200" key={index}>
                                <div className="rounded-full mx-auto border-4 border-white shadow-md w-44 h-44 overflow-hidden">

                                    <img className='h-full'
                                        src={`${elem.famous}?format=webp&crop=circle`} alt="Nagpur" />
                                </div>
                                <div className="text-2xl mt-4 ">
                                    {elem.city}
                                </div>
                            </div>
                        ))
                    }

                </div>


            </div>

        </section>
    )
}

export default LocationCarousel