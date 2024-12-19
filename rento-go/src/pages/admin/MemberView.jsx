import React, { useState } from 'react'

const MemberView = ({ data }) => {

    // const [user, setUser] = useState([])

    // const ignore = [
    //     'UID', 'VID', 'password', 'img', '__v', 'OID', '_id'
    // ]
    // const newObject = Object.keys(data)
    //     .filter(key => !ignore.includes(key)) // Filter out keys in ignore
    //     .reduce((acc, key) => {
    //         acc[key] = data[key]; // Build new object
    //         return acc;
    //     }, {});
    // setUser(newObject)
    return (
        <dialog id="memberview" className="modal modal-bottom sm:modal-middle text-sm capitalize">
            <div className="modal-box bg-white p-3 shadow min-w-1/2 w-1/2 capitalize">
                <form method="dialog">
                    <button className="btn z-10 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex text-lg'>
                    <img className='w-1/2 mx-auto avatar' src={data.img} alt={data.name} />

                    <table className="table table-xs">
                        <thead>
                            <tr className='text-zinc-500'>
                                <th>Key</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </dialog >

    )
}

export default MemberView