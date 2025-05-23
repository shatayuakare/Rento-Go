import axios from 'axios'
import React, { lazy, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { server } from '../../utils/Constants';
const VehicleView = lazy(() => import('./modal/VehicleView'));


const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);
    const [viewdata, setViewdata] = useState([]);
    const [view, setView] = useState(false);

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get(`${server}/vehicles`).then(res => {
                setVehicles((res.data))
            }).catch(err => toast.error(err.message))
        }

        getVehicles()
    }, [vehicles])

    const deleteVehicle = async (id) => {
        await axios.delete(`${server}/vehicles/delete/${id}`).then((res) => toast.success(res.data.message)).catch(err => console.error(err))
    }

    const vehicleStatus = async (id, status) => {
        await axios.put(`${server}/vehicles/status/${id}`, { status: status }).then(res => toast.success(res.data.message)).catch(err => console.error(err.response.data.message))
    }


    return (
        <div className="overflow-y-auto h-full flex flex-wrap gap-4 pt-2">
            {
                vehicles.map((elem) =>
                    <div className="p-3 flex-1 flex bg-white border-2 gap-4 border-zinc-300 h-fit" key={elem._id}>
                        <div className={`w-64 h-44 overflow-hidden relative`}>
                            <img className='w-full h-full m-auto' src={`${elem.images[0]}?format-webp&quality=auto`} alt="" />
                            <div className={`absolute top-0 right-0 ps-4 pb-2 text-white pt-1 pr-1 font-bold rounded-es-full ${(elem.status === 'ready') ? 'bg-green-500' : 'bg-orange-600'} `}>
                                {elem.status}
                            </div>
                        </div>
                        <div className='content-center text-sm'>
                            <div className="grid gap-2">
                                <div className='flex gap-2'>
                                    <b>Owner name :
                                    </b>
                                    {elem.owner}
                                </div>
                                <div className='flex gap-2'>
                                    <b>Vehicle Name :
                                    </b>
                                    {elem.brand} {elem.model} {elem.engine}CC
                                </div>
                                <div className='flex gap-2'>
                                    <b>Vehicle Number  :
                                    </b>
                                    {elem.number}
                                </div>
                                <div className='flex gap-2'>
                                    <b>Vehicle Fuel :
                                    </b>
                                    {elem.fuel}
                                </div>
                                <div className='flex gap-2'>
                                    <b>Vehicle Rent Price :
                                    </b>
                                    <span className="text-xl text-green-600 font-bold">₹<span className="text-xl">{elem.price}</span> /-</span>
                                </div>

                                <div className="flex gap-4 font-semibold">
                                    <button className='text-blue-500'
                                        onClick={() => document.getElementById('vehicleview').showModal() && setView(true)}
                                    >
                                        View
                                    </button>
                                    <button className='text-green-500'
                                        onClick={() => alert("Currently unavailable")}
                                    >
                                        Edit
                                    </button>
                                    {
                                        elem.status == 'ready' ?
                                            <button className='text-red-500'
                                                onClick={() => vehicleStatus(elem._id, 'busy')}
                                            >
                                                Busy
                                            </button>
                                            :
                                            <button className='text-green-600'
                                                onClick={() => vehicleStatus(elem._id, 'ready')}
                                            >
                                                Ready
                                            </button>
                                    }

                                    <button className='text-red-700'
                                        onClick={() => deleteVehicle(elem._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        {
                            view && <VehicleView data={viewdata} />
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Vehicles