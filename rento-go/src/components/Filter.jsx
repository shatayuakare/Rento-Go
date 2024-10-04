import React, { useState } from 'react'

const Filter = ({ vehicle, brands }) => {

    const [brand, setBrand] = useState('none')

    return (
        <div className="navbar py-0 min-h-10">
            <div className="navbar-start">
                Filter {vehicle}
            </div>
            <div className="navbar-end gap-6">
                <select className='select rounded-sm bg-white capitalize h-10 border-2 shadow' name="brand" id="brand" defaultValue={{ brand }}
                    onChange={(event) => setBrand(event.currentTarget.value)}>
                    <option>All</option>
                    {
                        brands.map((elem, index) => (
                            <option value={elem} key={index}>{elem}</option>
                        ))
                    }
                </select>
                <select className='select rounded-sm bg-white capitalize h-10 border-2 shadow' name="sort" id="sort" defaultValue={''}>
                    <option>Sort</option>
                    <option value="0-500">0-to-500</option>
                    <option value="500-1000">500-to-1000</option>
                    <option value="1000-2500">1000-to-2500</option>
                    <option value="2500-5000">2500-to-5000</option>
                </select>
            </div>
        </div >
    )
}

export default Filter