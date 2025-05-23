import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { Cookies } from 'react-cookie'

const Header = () => {
    const location = useLocation()
    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    const [headerShow, setHerderShow] = useState(true);
    const [sticky, setSticky] = useState(false)

    useEffect(() => {

        const headerVisibility = () => {
            const noHeader = [
                "/admin",
                "/admin/",
                "/admin/member",
                "/admin/contacts",
                "/admin/vehicles",
                "/admin/orders",
            ];
            // console.log(noHeader.includes(location.pathname))
            setHerderShow(noHeader.includes(location.pathname))
        }

        const scrollHandler = () => {
            if (window.scrollY >= 350) {
                setSticky(true);
            } else {
                setSticky(false)
            }
        }
        headerVisibility()

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    const logOut = () => {
        const cookie = new Cookies();

        cookie.remove('token')
        window.location.reload()
    }




    return (
        !headerShow &&
        <header className={`navbar  sm:px-2 md:px-10 lg:px-20 xl:px-28 sm:py-1 md:py-2 text-zinc-500 left-0 w-full z-[999] ${sticky ? "fixed bg-[#0B0808] lg:py-3 xl:py-3" : "absolute"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} role="button" aria-label="menu" className="btn btn-ghost lg:hidden px-1 p-0">
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
                    </button>
                    <ul
                        tabIndex={0} role="menuitems"
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-0 shadow">
                        <li className={location.pathname === "/" ? 'active' : ''}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className={location.pathname === "/contact" ? 'active' : ''}>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                        <li className={location.pathname === "/about" ? 'active' : ''}>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li className={
                            location.pathname === '/share/car' ? 'active' :
                                location.pathname === '/share/bike' ? 'active' : ''}>
                            <Link to={'/share/car'}>Share</Link>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost w-auto p-0 text-xl font-bold join rounded-sm gap-0">
                    <span className='text-red-500 p-2 lg:px-4 sm:px-3  bg-black border-2 join-item border-white'>Rento</span><span className="text-black join-item bg-white sm:p-1 p-2 sm:py-2 border-2 border-transparent">GO</span>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal text-white px-1 font-semibold">
                    <li className={location.pathname === "/" ? 'active' : ''}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={location.pathname === "/contact" ? 'active' : ''}>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li className={location.pathname === "/about" ? 'active' : ''}>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className={
                        location.pathname === '/share/car' ? 'active' :
                            location.pathname === '/share/bike' ? 'active' : ''}>
                        <Link to={'/share/car'}>Share</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    authUser ?
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div className='bg-white p-1 ps-2 pe-4 rounded-md text-black' tabIndex={0} role="button">
                                <div className="avatar flex gap-2 items-center">
                                    <div className="mask mask-squircle w-8">
                                        <img src={authUser.img ? authUser.img : "https://cdn.vectorstock.com/i/1000v/11/41/male-profile-picture-vector-2051141.jpg?crop=circle&quality=auto&size=small"} alt={authUser.name} />
                                    </div>
                                    {authUser.name.split(' ', [1])}
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu font-semibold bg-zinc-100 rounded-box z-[1] p-2 shadow">
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

    )
}

export default Header