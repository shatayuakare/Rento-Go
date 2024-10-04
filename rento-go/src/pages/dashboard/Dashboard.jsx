import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from "../../context/AuthProvider"

const Dashboard = () => {

    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser)


    return (
        <section className="content-center">
            <div className="sm:mx-2 md:mx-20 lg:mx-24  xl:mx-28 flex sm:pt-16 sm:flex-col lg:flex-row sm:gap-3 lg:gap-6 lg:h-[80vh]">

                <div className="sm:w-full lg:w-1/4 border-2 lg:p-5 bg-white border-zinc-300 relative">
                    <div className='text-center pt-5'>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                <img src={authUser.img ? authUser.img : "https://cdn.vectorstock.com/i/1000v/11/41/male-profile-picture-vector-2051141.jpg"} />
                            </div>
                        </div>
                        <h5 className="text-2xl font-semibold text-zinc-800">{authUser.name}</h5>
                        <div className="text-zinc-500 underline">{authUser.email}</div>
                    </div>

                    <ul className="menu w-full text-zinc-800 font-semibold mb-8 mt-4">
                        <li>
                            <Link to={"/dashboard"}>
                                <i className='bx bxs-home text-2xl'></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={"./myprofile"}>
                                <i className='bx bxs-user text-2xl' ></i>
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={"./myorder"}>
                                <i className='bx bxs-calendar text-2xl' ></i>
                                My Order
                            </Link>
                        </li>
                        <li>
                            <Link to={"./policy"}>
                                <i className='bx bxs-shield text-2xl'></i>
                                Insurence & Policy
                            </Link>
                        </li>
                    </ul>

                    <button className='sm:px-6 md:px-12 p-3 absolute bottom-0 left-0 text-black flex items-center gap-2 text-lg font-bold text-start w-full'>
                        <i className='bx bx-log-out text-2xl'></i>
                        Sign out
                    </button>
                </div>

                <div className="sm:w-full lg:w-3/4 flex flex-col sm:gap-3 lg:gap-6">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Dashboard