import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get("http://localhost:8080/vehicles").then(res => {
                setVehicles((res.data))
            }).catch(err => console.log(err))
        }

        getVehicles()
    }, [vehicles])

    const deleteVehicle = async (id) => {
        await axios.delete("").then((res) => {
            toast.success(res.data.message)
        }).catch(err => console.error(err))
    }

    return (
        <div className="h-full overflow-y-auto grid gap-3">
            {
                vehicles.map((elem) =>
                    <div className="p-3 flex bg-white border-2 border-zinc-200" key={elem._id}>
                        <img className='w-96' src={elem.images[0]} alt="" />

                        <div className=''>

                        </div>
                    </div>)
            }

        </div>
    )
}

export default Vehicles