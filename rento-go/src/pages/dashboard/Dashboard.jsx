import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from "../../context/AuthProvider"
import axios from 'axios';
import { toast } from 'react-toastify';
import { Cookies } from 'react-cookie';

const Dashboard = () => {
    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser)

    const location = useLocation();

    const updateProfilePicture = async () => {
        const profilePicUrl = prompt("Enter profile pic url...");
        if (profilePicUrl && profilePicUrl.trim() !== "")
            await axios.put(`http://localhost:8080/auth/profile/${authUser._id}`, { img: profilePicUrl }).then((res) => {
                toast.success(res.data.message)
            }).catch(err => toast.error(err.response.data.message))
    }

    const logOut = () => {
        const cookie = new Cookies();

        cookie.remove('token')
        window.location.reload()
    }


    return (
        <section className="content-center">
            <div className="sm:mx-2 md:mx-20 lg:mx-24  xl:mx-28 flex sm:pt-16 md:pt-0 sm:flex-col lg:flex-row sm:gap-3 lg:gap-6 lg:h-[80vh]">

                <div className="sm:w-full lg:w-1/4 border-2 lg:p-5 bg-white border-zinc-300 relative">
                    <div className='text-center pt-5'>
                        <div className="avatar relative">
                            <div className="ring-red-500 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                <img src={authUser.img ? `${authUser.img}?format=webp&quality=auto&crop-circle` : "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg?format=webp&crop=circle"} alt='profile pic' />
                            </div>

                            <button className='absolute bottom-0 right-0' type='button' onClick={updateProfilePicture}>
                                <i className='bx bxs-pencil bg-white p-1 text-md rounded-full border border-zinc-300'></i>
                            </button>
                        </div>
                        <h5 className="text-2xl font-semibold text-zinc-800">{authUser.name}</h5>
                        <div className="text-zinc-500 underlinen lowercase">{authUser.email}</div>
                    </div>

                    <ul className="menu w-full text-zinc-800 font-semibold mb-8 mt-4">
                        <li className={`${location.pathname === "/dashboard" ? 'active' : ''} focus:bg-red-500 focus-visible:text-blue-500`}>
                            <Link to={"/dashboard"}>
                                <i className='bx bxs-home text-2xl'></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className={location.pathname === "/dashboard/myorder" ? 'active' : ''}>
                            <Link to={"./myorder"}>
                                <i className='bx bxs-calendar text-2xl' ></i>
                                My Order
                            </Link>
                        </li>
                        <li className={location.pathname === "/dashboard/myvehicles" ? 'active' : ''}>
                            <Link to={"./mygarage"}>
                                <i className='bx bxs-car-garage text-2xl'></i>
                                My Garage
                            </Link>
                        </li>

                        <li className={location.pathname === "/dashboard/myprofile" ? 'active' : ''}>
                            <Link to={"./myprofile"}>
                                <i className='bx bxs-user text-2xl' ></i>
                                My Profile
                            </Link>
                        </li>
                        <li className={location.pathname === "/dashboard/policy" ? 'active' : ''}>
                            <Link to={"./policy"}>
                                <i className='bx bxs-shield text-2xl'></i>
                                Insurence & Policy
                            </Link>
                        </li>
                    </ul>

                    <button className='sm:px-6 md:px-12 p-3 absolute bottom-0 left-0 text-red-500 flex items-center gap-2 text-lg font-bold text-start w-full' type='button' onClick={logOut}>
                        <i className='bx bx-log-out text-2xl'></i>
                        Sign out
                    </button>
                </div>

                <div className="sm:w-full lg:w-3/4 flex flex-col sm:gap-3 lg:gap-6 overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Dashboard