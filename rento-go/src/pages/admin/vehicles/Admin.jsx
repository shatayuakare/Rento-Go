import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import NewVehicleForm from '../components/forms/NewVehicleForm'

const Admin = () => {

    return (
        <section className="flex fixed w-full h-full" id='admin'>
            <div className="w-1/5 text-white h-full">
                <div className='text-center h-[10%] flex justify-between items-center px-3'>
                    <Link to={"/"} className="btn btn-ghost w-auto p-0 text-xl font-bold join rounded-sm gap-0 text-red-500">
                        <span className=' p-2 lg:px-4 sm:px-3  bg-black border-2 join-item border-white'>Rento</span><span className="text-black join-item bg-white sm:p-1 p-2 sm:py-2 border-2 border-transparent">GO</span>
                    </Link>

                    <div className='text-white'>
                        kfdjb
                    </div>
                </div>


                <div className='text-center pt-8 h-[90%] min-h-[90%]'>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-red-500 w-24 rounded-full ring ring-offset-2">
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2276" />
                        </div>
                    </div>
                    <h5 className="text-2xl font-semibold ">Shatayu Akare</h5>
                    <div className="text-zinc-400 underline">shatyauakare@gmail.com</div>
                </div>
                <ul className="menu w-full text-zinc-200 font-semibold mb-8 mt-4">
                    <li>
                        <Link to={"vehicles"}>
                            <i className='bx bxs-car text-2xl'></i>
                            {/* <i class='bx bxs-car'></i> */}
                            Vehicles
                        </Link>
                    </li>
                    <li>
                        <Link to={"vehicles"}>
                            <i className='bx bxs-car text-2xl'></i>
                            {/* <i class='bx bxs-car'></i> */}
                            Vehicles
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="w-4/5 bg-zinc-100 flex flex-col gap-4">
                <div className="bg-white w-full flex h-[10vh] items-center justify-between">
                    <h5 className="text-2xl font-bold ps-6 capitalize">Home{location.pathname}</h5>
                </div>
                <div className='h-[90vh]'>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Admin