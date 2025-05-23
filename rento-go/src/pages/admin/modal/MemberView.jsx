import React from 'react'

const MemberView = ({ data }) => {
    return (
        <dialog id="memberview" className="modal modal-bottom sm:modal-middle text-sm capitalize">
            <div className="modal-box bg-white p-3 shadow min-w-1/2 w-1/2 capitalize">
                <form method="dialog">
                    <button className="btn z-10 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex text-lg gap-4 flex-col'>
                    <img className='w-1/2 mx-auto rounded-box' src={(data.img) + '?format=webp&quality=auto'} alt={data.name} />
                    <div className="grid px-3 p-2">
                        <div className="flex gap-2">
                            <b>Name : </b>{data.name}
                        </div>
                        <div className="flex gap-2">
                            <b>Email Address : </b>{data.email}
                        </div>
                        <div className="flex gap-2">
                            <b>Phone Number : </b>{data.phone}
                        </div>
                        <div className="flex gap-2">
                            <b>Orders : </b>{(data.order)}
                        </div>
                        <div className="flex gap-2">
                            <b>Vehicles : </b>{data.OID.length}
                        </div>
                        <div className="flex gap-2">
                            <b>Admin : </b>{(data.admin) ? 'true' : 'false'}
                        </div>
                    </div>
                </div>
            </div>
        </dialog >

    )
}

export default MemberView