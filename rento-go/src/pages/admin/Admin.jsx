import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

// import NewVehicleForm from '../components/forms/NewVehicleForm'

const Admin = () => {

    const [authUser, setAuthUser] = useAuth()
    setAuthUser(authUser)

    return (
        <section className="flex fixed w-full bg-zinc-50" id='admin'>
            <div className="w-1/5 text-white bg-zinc-900">
                <div className='text-center mt-20'>
                    <div className="avatar">
                        <div className="ring-red-500 ring-offset-red-200 w-28 rounded-full ring ring-offset-2">
                            <img src={authUser.img} />
                        </div>
                    </div>
                    <h5 className="text-2xl font-semibold ">{authUser.name}</h5>
                    <div className="text-zinc-400 underline lowercase">{authUser.email}</div>
                </div>

                <ul className="menu text-center p-0 mt-6 mx-auto">
                    <li className=''>
                        <Link to={'/admin'} >
                            Members
                        </Link>
                    </li>
                    <li className='active'>
                        <Link to={'/admin/vehicles'} >
                            Vehicles
                        </Link>
                    </li>
                    <li className=''>
                        <Link to={'/admin/orders'} >
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