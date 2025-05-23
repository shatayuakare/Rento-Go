import React, { Suspense, useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import EditVehicleForm from '../../components/forms/EditVehicleForm';
import ContentLoader from '../../components/ContentLoader';
import { server } from '../../utils/Constants';


const MyGarage = () => {

    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get(`${server}/vehicles`).then((res) => {
                setVehicles((res.data).filter(elem => elem.UID === authUser._id));
            }).catch(err => console.error(err))
        }

        getVehicles();
    }, [vehicles])

    const deleteVehicle = async (id) => {
        await axios.delete(`${server}/vehicles/delete/${id}`).then((res) => toast.success(res.status.message)).catch(err => toast.error(err))
    }

    return (
        <div className='overflow-hidden pb-24'>
            <h5 className="text-2xl bg-white border-2 border-zinc-300 text-zinc-800 font-semibold p-5">My Vehicle</h5>

            <div className="grid grid-cols-2 gap-4 mt-4 bg-transparent h-full overflow-y-scroll">
                {
                    vehicles.map(elem =>
                        <Suspense fallback={<ContentLoader />} key={elem._id}>
                            <div className="flex items-center p-2 border-2 relative h-36 bg-white shadow border-zinc-300 gap-4" key={elem._id}>
                                <div className="h-full w-50">
                                    <img className='h-full w-full' src={`${elem.images[0]}?format=webp&quality=auto&crop=square`} alt="" />
                                </div>

                                <div className="grid gap-1">
                                    <div className='flex gap-2'>
                                        <b>Owner</b> : {elem.owner}
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Name</b> : {elem.brand} {elem.model}
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Number</b> : {elem.number}
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Price</b> : <span className='text-xl text-green-600 font-bold'>₹ {elem.price}/-</span>
                                    </div>
                                </div>

                                <div className="dropdown dropdown-bottom dropdown-end absolute top-1 right-1 bg-transparent p-0">
                                    <div tabIndex={0} role="button" className="btn bg-transparent min-w-0 w-8 h-8  hover:bg-zinc-100 rounded-full min-h-0 border-0">
                                        <i className='bx bx-dots-vertical text-xl text-black'></i>
                                    </div>

                                    <ul tabIndex={0} className="dropdown-content vehicle-menu menu p-1 z-[1] text-nowrap text-end">
                                        <li>
                                            <Link to={elem.cartype ? `/cars/${elem._id}` : `/bikes/${elem._id}`} className='btn text-blue-500  btn-xs btn-ghost ' type='button'>View</Link>
                                        </li>
                                        <li>
                                            <button className='btn text-green-500  btn-xs btn-ghost ' type='button'
                                                onClick={() => document.getElementById('editVehicleForm').showModal()}
                                            >Edit</button>
                                        </li>
                                        <li>
                                            <button className='btn text-red-500  btn-xs btn-ghost ' type='button' onClick={() => deleteVehicle(elem._id)}>Delete</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <EditVehicleForm data={elem} />
                        </Suspense>
                    )
                }
            </div>
        </div >
    )
}

export default MyGarage