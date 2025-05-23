import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { server } from '../../utils/Constants';

const Profile = () => {
    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser)

    const [name, setName] = useState()
    const [phone, setPhone] = useState()

    const [loader, setLoader] = useState(false)
    const [loader1, setLoader1] = useState(false)

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const saveChanges = async (event) => {
        event.preventDefault()
        const data = {
            name, phone
        }
        setLoader(true)

        await axios.put(`${server}/auth/update/${authUser._id}`, data).then(async (res) => {
            toast.success(res.data.message)
            setLoader(false)

        }).catch(err => toast.error(err.response.data.message))
        setLoader(false)
    }

    const updatePassword = async (event) => {
        event.preventDefault()
        const passwords = {
            oldPassword, newPassword
        }
        setLoader1(true)
        await axios.put(`${server}/auth/newpassword/${authUser._id}`, passwords).then((res) => {
            setLoader1(false)
            toast.success(res.data.message)
        }).catch(err =>
            toast.error(err.response.data.message)
        )
        setLoader1(false)
        setOldPassword("")
        setNewPassword("")
    }


    return (
        <div className='border-2 p-6 sm:px-4 lg:px-8 text-zinc-700 bg-white border-zinc-300' >
            <h5 className="text-2xl text-zinc-800 font-semibold">
                Update Profile
            </h5>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:gap-1 lg:gap-6">
                <form action="" onSubmit={saveChanges}>
                    <div>
                        <label className='label' htmlFor="name">Name</label>
                        <input className='input bg-zinc-200 p-2 w-full rounded-md' type="text" name="name" id="name" placeholder='Full Name'
                            value={name || authUser.name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label' htmlFor="phone">Phone</label>
                        <input className='input bg-zinc-200 p-2 w-full rounded-md' type="text" name="phone" id="phone" placeholder='Phone Number...'
                            value={phone || authUser.phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label' htmlFor="email">Email address</label>
                        <input className='input disabled:text-zinc-500 disabled:border-0 disabled:bg-zinc-200 p-2 w-full rounded-md' type="email" name="email" id="email" placeholder='Enter email address...' disabled
                            value={authUser.email}
                        />
                    </div>

                    <button className="btn rounded-md mt-6 text-white" type='submit'>
                        {
                            loader ?
                                <span className="loading loading-bars loading-md"></span>
                                :
                                <span>Save Changes</span>
                        }
                    </button>
                </form>
                <form action="" onSubmit={updatePassword}>
                    <div>
                        <label className='label' htmlFor="oldPassword">Old Password</label>
                        <input className='input rounded-md bg-zinc-200 p-2 w-full' type="password" name="oldPassword" id="oldPassword" placeholder='Old Password'
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)} />
                    </div>
                    <div>
                        <label className='label' htmlFor="newPassword">New Password</label>
                        <input className='input bg-zinc-200 rounded-md p-2 w-full' type="password" name="newpassword" id="newPassword" placeholder='New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <button className="btn rounded-md mt-6 text-white" type='submit'>
                        {
                            loader1 ?
                                <span className="loading loading-bars loading-md"></span>
                                :
                                <span>Change Password</span>
                        }
                    </button>
                </form>
            </div>

            <p className='p-4 text-sm'>
                ⚠️ If you update some details and not showing here so please logout and relogin
            </p>
        </div>
    )
}

export default Profile