import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { Cookies } from 'react-cookie'

const Header = () => {
    const location = useLocation()
    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 350) {
                setSticky(true);
            } else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    const logOut = () => {
        const cookie = new Cookies();

        cookie.remove('token')
        window.location.reload()
    }

    return (

        <>
            {
                ((location.pathname !== "/admin") || (location.pathname !== "/admin" || "/admin/vehicles" || "/admin/*")) &&
                <header className={`navbar  sm:px-2 md:px-10 lg:px-20 xl:px-28 sm:py-1 md:py-2 lg:py-5 text-zinc-500 left-0 w-full z-[999] ${sticky ? "fixed bg-[#0B0808] lg:py-3 xl:py-3" : "absolute"}`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1 p-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-0 shadow">
                                <li>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'}>Contact</Link>
                                </li>
                                <li>
                                    <Link to={'/about'}>About</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to={"/"} className="btn btn-ghost w-auto p-0 text-xl font-bold join rounded-sm gap-0">
                            <span className='text-red-500 p-2 lg:px-4 sm:px-3  bg-black border-2 join-item border-white'>Rento</span><span className="text-black join-item bg-white sm:p-1 p-2 sm:py-2 border-2 border-transparent">GO</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        {
                            authUser ?
                                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                                    <div className='bg-white p-1 ps-2 pe-4 rounded-sm text-black' tabIndex={0} role="button">
                                        <div className="avatar flex gap-2 items-center">
                                            <div className="mask mask-squircle w-8">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div>
                                            {authUser.name.split(' ', [1])}
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu invert rounded-box z-[1] p-2 shadow">
                                        <li>
                                            <Link to={'/dashboard'} className='text-nowrap'>Dashboard</Link>
                                        </li>
                                        <li>
                                            <button className='' onClick={logOut}>
                                                Log Out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <>
                                    <Link className='btn btn-ghost bg-white border-2 font-bold border-black hover:border-black hover:bg-white text-black md:hidden min-h-10 h-10 rounded-sm' to={"/register"}>
                                        Register
                                    </Link>
                                    <div className="sm:gap-1 md:gap-2 lg:gap-4 sm:hidden md:flex">
                                        <Link className='btn btn-ghost font-bold bg-black hover:bg-black border-2 border-white hover:border-white text-white min-h-10 h-10 rounded-sm' to={"/login"}>
                                            Login
                                        </Link>

                                        <Link className='btn btn-ghost bg-white border-2 font-bold border-black hover:border-black hover:bg-white text-black min-h-10 h-10 rounded-sm' to={"/register"}>
                                            Register
                                        </Link>
                                    </div>
                                </>
                        }



                    </div>
                </header>
            }
        </>
    )
}

export default Header