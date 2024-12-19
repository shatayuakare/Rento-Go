import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

const Admin = () => {
    const location = useLocation()
    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    return (
        <section className="flex fixed w-full bg-zinc-50" id='admin'>
            <div className="w-1/5 text-white bg-zinc-900">
                <div className='text-center mt-20'>
                    <div className="avatar">
                        <div className="ring-red-500 ring-offset-red-200 w-28 rounded-full ring ring-offset-2">
                            <img src={`${authUser.img ? ((authUser.img) + '?format=webp&crop=circle') : 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'}`} alt='profile pic' />
                        </div>
                    </div>
                    <h5 className="text-2xl font-semibold mt-3">{authUser.name}</h5>
                    <div className="text-zinc-400 underline lowercase">{authUser.email}</div>
                </div>

                <ul className="menu text-center p-0 mt-6 mx-auto text-lg gap-2">
                    <li className={location.pathname === '/admin' ? 'active' : ''}>
                        <Link className='w-full justify-center' to={'/admin'} >
                            Members
                        </Link>
                    </li>
                    <li className={location.pathname === '/admin/contacts' ? 'active' : ''}>
                        <Link className='w-full justify-center' to={'/admin/contacts'} >
                            Contacts
                        </Link>
                    </li>
                    <li className={location.pathname === '/admin/vehicles' ? 'active' : ''}>
                        <Link className='w-full justify-center' to={'/admin/vehicles'} >
                            Vehicles
                        </Link>
                    </li>
                    <li className={location.pathname === '/admin/orders' ? 'active' : ''}>
                        <Link className='w-full justify-center' to={'/admin/orders'} >
                            Orders
                        </Link>
                    </li>

                </ul>

            </div>

            <div className="w-4/5 flex flex-col">
                <div className="bg-white w-full flex h-[10vh] items-center justify-between border-b-2">
                    <h5 className="text-2xl font-bold ps-6 capitalize">Home{location.pathname}</h5>
                </div>
                <div className='h-[90vh] '>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Admin