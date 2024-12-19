import React from 'react'
import SearchForm from '../../components/forms/SearchForm'
import { Link } from 'react-router-dom'

const HomeIndex = () => {
    return (
        <section className="bg-[#0B0808]">

            {/* https://purepng.com/public/uploads/large/purepng.com-jaguar-xkr-s-blue-carcarvehicletransportautocars-561521125346a9gaa.png */}
            <div className='sm:bg-[url("https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_640.png")] sm:bg-[center_bottom_-3rem] sm:bg-no-repeat lg:bg-none absolute min-h-[100vh] lg:h-auto sm:h-[100vh] content-center overflow-hidden'>

                <div className='sm:px-4 md:px-12 lg:mx-24 xl:mx-28 lg:pt-0 sm:py-8'>

                    <div className='lg:w-[100%] xl:w-[65%] text-white z-10 relative'>
                        <h4 className='sm:text-[3.5rem] lg:text-[3.5rem] xl:text-[4rem] font-semibold lg:py-5 sm:pb-1 lg:pb-3 capitalize font-["poetsen_one"] sm:leading-none lg:leading-normal md:leading-tight'>
                            Open the door to endless possibilities with <br /> <span className='text-red-500 uppercase shadow-xl  drop-shadow-[0_0_5px_#094393] cssanimation leMagnify random'>Rento GO</span>
                        </h4>
                        {/* text-[#50D1FA] */}
                        <p className='py-3 text-xl text-zinc-500 md:w-2/5 xl:w-2/3'>
                            To contribute to position change and achieve our sustainability goals with many extraordinary
                        </p>
                        <div className='flex gap-6 mt-10'>
                            <Link to={"cars"} className="btn btn-ghost bg-white border-2 hover:bg-white text-black font-bold rounded-sm min-h-11 h-11">
                                Rent Car
                            </Link>
                            <Link to={"/bikes"} className="btn btn-ghost bg-transparent border-2 border-white hover:border-white text-white font-bold rounded-sm min-h-11 h-11 ">
                                Rent Bike
                            </Link>
                        </div>
                    </div>

                    <div className='hidden flex-shrink-0 lg:flex overflow-hidden'>
                        <img className='absolute z-0 lg:-bottom-16 xl:bottom-16 lg:-right-10 lg:w-[58rem] xl:w-[59rem] drop-shadow-[-5px_2px_8px_red]'
                            src="https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_640.png?format=webp&quality=auto" alt="" loading='fast' />
                    </div>
                </div>
            </div>
            <div className="sm:hidden md:flex md:absolute shadow-xl left-0 right-0 sm:-bottom-40 md:-bottom-16 sm:w-4/5 lg:w-2/3 mx-auto bg-white rounded-md sm:p-4 lg:p-6">
                <SearchForm />
            </div>
        </section>
    )
}

export default HomeIndex