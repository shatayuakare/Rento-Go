import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import EditVehicleForm from '../../components/forms/EditVehicleForm';
const MyVehicles = () => {

    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get("http://localhost:8080/vehicles").then((res) => {

                setVehicles((res.data).filter(elem => elem.uID === authUser._id));

            }).catch(err => console.error(err))
        }

        getVehicles();
    }, [vehicles])

    const deleteVehicle = async (id) => {
        await axios.delete(`http://localhost:8080/vehicles/delete/${id}`).then((res) => {
            console.log(res.data.message)
        }).catch(err => toast.error(err))
    }


    return (
        <div className='overflow-hidden pb-24'>
            <h5 className="text-2xl bg-white border-2 border-zinc-300 text-zinc-800 font-semibold p-5">My Vehicle</h5>

            <div className="grid grid-cols-2 gap-4 mt-4 bg-transparent h-full overflow-y-scroll">

                {
                    vehicles.map(elem =>
                        <div className="flex items-center p-2 border-2 relative h-36 bg-white shadow border-zinc-300" key={elem._id}>
                            <div className="h-full w-50">
                                <img className='h-full w-full' src={elem.images[0]} alt="" />
                            </div>

                            <div className="ps-4">
                                <ul className='text-[1rem]' type="none">
                                    <li><b>Brand</b> : {elem.brand}</li>
                                    <li><b>Model</b> : {elem.model}</li>
                                    <li><b>Number</b> : {elem.number}</li>
                                    <li><b>Price</b> : <span className='text-xl text-green-600 font-bold'>₹ {elem.price}/-</span></li>
                                </ul>
                            </div>

                            <div className="dropdown dropdown-bottom dropdown-end absolute top-1 right-1 bg-transparent p-0">
                                <div tabIndex={0} role="button" className="btn bg-transparent min-w-0 w-8 h-8  hover:bg-zinc-100 rounded-full min-h-0 border-0">
                                    <i className='bx bx-dots-vertical text-xl text-black'></i>
                                </div>

                                <ul tabIndex={0} className="dropdown-content vehicle-menu menu p-1 z-[1] text-nowrap text-start">
                                    <li>
                                        <Link to={elem.cartype ? `/cars/${elem._id}` : `/bikes/${elem._id}`} className='btn btn-xs btn-ghost p-0 text-blue-500' type='button'>View</Link>
                                    </li>
                                    <li>
                                        <button className='btn btn-xs btn-ghost p-0 text-green-500' type='button'
                                            onClick={() => document.getElementById('editVehicleForm').showModal()}
                                        >Edit</button>
                                    </li>
                                    <li>
                                        <button className='btn text-red-500  btn-xs btn-ghost ' type='button' onClick={() => deleteVehicle(elem._id)}>Delete</button>
                                    </li>
                                </ul>
                            </div>
                            <EditVehicleForm data={elem} />
                        </div>
                    )
                }


            </div>

        </div >
    )
}

export default MyVehicles