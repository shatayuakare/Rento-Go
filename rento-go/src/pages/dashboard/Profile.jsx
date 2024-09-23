import React from 'react'

const Profile = () => {
    return (
        <form className='border-2 p-6 sm:px-4 lg:px-8 text-zinc-700 bg-white border-zinc-300' action="">
            <h5 className="text-2xl text-zinc-800 font-semibold">
                Update Profile
            </h5>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:gap-1 lg:gap-6">
                <div>
                    <label className='label' htmlFor="username">Username</label>
                    <input className='input bg-zinc-200 p-2 w-full rounded-md' type="text" name="username" id="username" placeholder='New Username' />
                </div>
                <div>
                    <label className='label' htmlFor="email">Email address</label>
                    <input className='input bg-zinc-200 p-2 w-full rounded-md' type="email" name="email" id="email" placeholder='Enter email address...' />
                </div>
                <div>
                    <label className='label' htmlFor="nPassword">New Password</label>
                    <input className='input rounded-md bg-zinc-200 p-2 w-full' type="password" name="nPassword" id="nPassword" placeholder='New Password' />
                </div>
                <div>
                    <label className='label' htmlFor="rPassword">Re-enter Password</label>
                    <input className='input bg-zinc-200 rounded-md p-2 w-full' type="password" name="rpassword" id="rPassword" placeholder='Re-enter Password' />
                </div>
            </div>
            <button className="btn rounded-md mt-6 text-white" type='submit'>Save Changes</button>
        </form>
    )
}

export default Profile