import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

    const location = useLocation()
    const [headerShow, setHerderShow] = useState(true);

    useEffect(() => {
        const headerVisibility = () => {
            const noHeader = [
                "/admin",
                "/admin/",
                "/admin/contacts",
                "/admin/member",
                "/admin/vehicles",
                "/admin/orders",
            ];
            setHerderShow(noHeader.includes(location.pathname))
        }
        headerVisibility()
    }, [])


    const citys = [
        "Nagpur",
        "Amravatti",
        "Mumbai",
        "Pune",
        "Nashik",
    ]

    return (
        !headerShow &&
        <footer className="bg-[#0E0C0B] text-zinc-100 sm:py-8 md:py-16 sm:px-8 md:px-16 lg:px-24 xl:px-28 md:flex justify-between h-auto min-h-auto">
            <div className='md:w-[40%] sm:w-full'>
                <Link to={"/"} className="btn btn-ghost w-auto p-0 my-5 text-xl font-bold join rounded-sm gap-0">
                    <span className='text-white p-2 lg:px-4 sm:px-3  bg-black border-2 join-item border-white'>Rento</span><span className="text-black join-item bg-white sm:p-1 p-2 sm:py-2 border-2">GO</span>
                </Link>
                <p className="capitalize text-zinc-400 pb-5 text-xl text-wrap w-[60%]">
                    Is just a drivee Ride away. Take controll of Jurney today.
                </p>
                <div className="flex gap-4 pt-10">
                    <Link className='btn btn-ghost hover:bg-transparent text-2xl  btn-circle hover:border-b-4 border-0 hover:border-red-500 bx-tada-hover' to="https://www.facebook.com" target="_blank" aria-label="Link for open facebook page" rel="noopener noreferrer">
                        <i className='bx bxl-facebook '></i>
                    </Link>
                    <Link className='btn btn-ghost hover:bg-transparent text-2xl btn-circle hover:border-b-4 border-0 hover:border-red-500 bx-tada-hover' to="https://www.instgram.com" aria-label="link for open instagram page" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-instagram'></i>
                    </Link>
                    <Link className='btn btn-ghost hover:bg-transparent text-2xl btn-circle hover:border-b-4 border-0 hover:border-red-500 bx-tada-hover' to="https://www.x.com" target="_blank" aria-label="link for open twitter page" rel="noopener noreferrer">
                        <i className='bx bxl-twitter'></i>
                    </Link>
                    <Link className='btn btn-ghost hover:bg-transparent text-2xl btn-circle hover:border-b-4 border-0 hover:border-red-500 bx-tada-hover' to="https://www.linkedin.com" aria-label="link for open Linkedin page" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-linkedin'></i>
                    </Link>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-[60%] sm:w-full text-zinc-100'>


                <div>
                    <h5>Available In</h5>
                    <ul className='text-zinc-400'>
                        {
                            citys.map((elem, index) => (<li key={index}>{elem}</li>))
                        }
                    </ul>
                </div>

                <div>
                    <h5>Vehicle Types</h5>
                    <ul className='text-zinc-400'>
                        <li>Bike</li>
                        <li>Car</li>
                    </ul>
                </div>
                <div>
                    <h5>About Company</h5>
                    <ul className='text-zinc-400'>
                        <li>
                            <Link to={"/about"}>About us</Link>
                        </li>
                        <li>
                            <Link to={"/career"}>Career</Link>
                        </li>
                        <li>
                            <Link to={"/help"}>help</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact us</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h5>Policy</h5>
                    <ul className='text-zinc-400'>
                        <li>
                            <Link to={"/policy"}>Fee Policy</Link>
                        </li>
                        <li>
                            <Link to={"/policy"}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={"/term-condition"}>Term & Condition</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer