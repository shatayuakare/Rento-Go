import React from 'react'

const ContactView = ({ data }) => {
    return (
        <dialog id="memberview" className="modal modal-bottom sm:modal-middle text-sm capitalize">

            <div className="modal-box bg-white p-3 shadow min-w-1/2 w-1/2 capitalize">
                <form method="dialog">
                    <button className="btn z-10 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="grid">
                    <div className="flex gap-2">
                        <b>Name : </b> {data.name}
                    </div>
                    <div className="flex gap-2">
                        <b>Email address : </b> {data.email}
                    </div>
                    <div className="flex gap-2">
                        <b>Phone Number : </b> {data.phone}
                    </div>
                    <div className="flex gap-2">
                        <b>Message : </b> {data.message}
                    </div>
                </div>


            </div>
        </dialog>
    )
}

export default ContactView