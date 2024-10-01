import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Filter = ({ vehicle }) => {

    const [list, setList] = useState([])
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const getData = async () => {
            await axios.get(`http://localhost:8080/vehicles`).then((res) => {
                const data = res.data;

                // setBrands(data.filter((elem) => elem.brand))
                setList(data.filter((elem) => elem.vehicletype === vehicle))
            }).catch(err => toast.error(err.response.data.message))
        }

        const brandSetter = () => {

        }
        getData()
        brandSetter()
    }, [])

    console.log(list)
    return (
        <div className="navbar py-0 min-h-10">
            <div className="navbar-start">
                Filter
            </div>
            <div className="navbar-end">
                <select className='select bg-white capitalize h-9 border-2 shadow' name="brand" id="brand" defaultValue={'none'}>
                    <option value="none">All</option>
                    {
                        brands.map((elem, index) => (
                            <option value={elem} key={index}>{elem}</option>
                        ))
                    }
                </select>
                <select className='select bg-white capitalize h-9 border-2 shadow' name="sort" id="sort" defaultValue={''}>
                    <option value="">Sort</option>
                    <option value="a-z">A-to-Z</option>
                    <option value="z-a">Z-to-A</option>
                </select>
            </div>
        </div >
    )
}

export default Filter