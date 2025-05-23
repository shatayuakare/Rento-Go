import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { server } from '../../utils/Constants'

const ForgotPassword = ({ email }) => {

    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(false);

    const forgotPassword = async (event) => {
        event.preventDefault()
        setLoader(true)
        if (!name) {
            setError("Please enter name...")
            setLoader(false)
        }
        if (!email) {
            setError("Please enter email address...")
            setLoader(false)
        }

        const data = { email, name };

        await axios.put(`${server}/auth/forgotpassword`, data).then((res) => {
            toast.success(res.data.message, {
                autoClose: 5000
            })
            document.getElementById('forgotPassword').close()
        }).catch(err => setError(err.response.data.message))

        setName('')
    }


    return (
        <dialog id="forgotPassword" className="modal backdrop-blur modal-bottom sm:modal-middle">
            <div className="modal-box bg-white">

                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <i className='bx bx-x text-2xl'></i>
                    </button>
                </form>

                <form className='flex flex-col gap-5 text-black' action="" onSubmit={forgotPassword}>
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input className='input rounded-sm w-full text-zinc-800 bg-zinc-100 p-2' type="text" name="name" id="name"
                            placeholder='Enter name...'
                            value={name}
                            onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email" className="label">Email address</label>
                        <input className='input disabled:text-zinc-700 rounded-sm w-full disabled:bg-zinc-100 disabled:border-0 p-2' type="email" name="email" id="email" placeholder='Enter Email address...'
                            value={email} disabled />
                    </div>
                    {
                        error && <div className="text-red-500 py-0 px-3">{error}</div>

                    }
                    <button className='btn btn-ghost bg-blue-500 hover:bg-blue-600 rounded-md h-10 mx-auto min-h-10 text-white my-2'>
                    {
                                    loader ?
                                        <span className="loading loading-bars loading-md"></span>
                                        :
                                        <span>Forgot Password</span>
                                }
                    </button>
                </form>
            </div>
        </dialog>
    )
}

export default ForgotPassword