import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

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



    return (
        <header className={`navbar sm:px-2 md:px-10 lg:px-20 xl:px-28 sm:py-1 md:py-2 lg:py-3 left-0 w-full z-[999] ${sticky ? "fixed bg-[#0B0808]" : "absolute"}`}>
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
                            <details>
                                <summary>About</summary>
                                <ul className="p-2">
                                    <li><Link to={'/about'}>Who I am?</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost w-auto p-0 text-xl font-bold join rounded-sm gap-0">
                    <span className='text-white p-2 lg:px-4 sm:px-3  bg-black border-2 join-item border-white'>Rento</span><span className="text-black join-item bg-white sm:p-1 p-2 sm:py-2 border-2">GO</span>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 text-white font-semibold">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <details>
                            <summary>About</summary>
                            <ul className="p-2">
                                <li>
                                    <Link to={'/about'}>Who I am?</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end ">
                <Link className='btn btn-ghost bg-white border-2 font-bold border-black hover:border-black hover:bg-white text-black md:hidden min-h-10 h-10 rounded-sm' to={"/register"}>
                    Register
                </Link>
                <div className="sm:gap-1 md:gap-2 lg:gap-4 sm:hidden md:flex">
                    <Link className='btn btn-ghost font-bold bg-black hover:bg-black border-2 border-white hover:border-black text-white min-h-10 h-10 rounded-sm' to={"/login"}>
                        Login
                    </Link>

                    <Link className='btn btn-ghost bg-white border-2 font-bold border-black hover:border-black hover:bg-white text-black min-h-10 h-10 rounded-sm' to={"/register"}>
                        Register
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header