import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Cookies } from 'react-cookie'
import { server } from '../../utils/Constants'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState(null)

    const [loader, setLoader] = useState(false)

    const cookie = new Cookies();

    const registerHandler = async (event) => {
        event.preventDefault()
        const registerData = { name, email, password }
        if (!name) return setError("Name is required")
        if (!email) return setError("Email is required")
        if (!password) return setError("Password is required")
        if (!terms) return toast.warning("Please accept Term and Condition")

        setLoader(true)
        await axios.post(`${server}/auth/register`, registerData).then((res) => {
            cookie.set("token", res.data.token, { expires: new Date(Date.now() + 31536000000) })

            toast.success(res.data.message)
            setLoader(false)
            window.location.reload()
        }).catch((err) => toast.error(err.response.data.message))

        setError(null)
        setLoader(false)
        setName("")
        setEmail("")
        setPassword("")
        setTerms(false)
    }


    return (
        <section className="content-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2  md:mx-10 lg:mx-20 xl:mx-28 min-h-[80vh] sm:pt-16 md:pt-0">

                <div className="capitalize bg-[url('https://www.classicgarage.ca/wp-content/uploads/2022/03/Classic-BMW-Web-Clean-JPEG-3000px-53-1024x683.jpg?format-webp&quality=auto')]">
                    <div className="bg-black text-zinc-300 bg-opacity-[60%] h-full w-full xl:px-20 lg:px-16 md:px-10 content-center sm:px-2 sm:py-12">

                        <div className="text-center">
                            <h5 className='text-[1.7rem] font-bold text-white p-1'>Welcome to Rento-GO</h5>

                            <div className="text-lg">
                                the best global car sharing marketplace
                            </div>

                            <p className="text-sm py-2">
                                Have a car? Earn Monay as host. Rent your dream car as a guest
                            </p>

                            <Link className='btn btn-ghost bg-zinc-100 hover:bg-white rounded-md text-black my-6'>
                                Play Video Intro
                                <i className='bx bx-play text-2xl'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-zinc-800 xl:px-12 md:px-8 flex flex-col justify-around border-2 sm:p-6 lg:py-6">
                    <div>
                        <h5 className='text-2xl font-bold py-1'>Create an Account</h5>
                        <p className="text-sm">
                            We`do love to have you on board. Join our 500+ customers around he globe and enhance productivity.
                        </p>
                    </div>

                    <div className='pb-6 pt-4 grid sm:md:grid-cols-1  md:lg:grid-cols-2 gap-4'>
                        <button className="btn btn-ghost h-10 whitespace-nowrap bg-blue-600 hover:bg-blue-700 rounded-2xl text-white"
                            onClick={() => alert("Service not Available")}>
                            <i className='bx bxl-facebook text-2xl font-bold' ></i>
                            Continue with Facebook
                        </button>
                        <button className="btn btn-ghost h-10 whitespace-nowrap bg-red-600 hover:bg-red-700 rounded-2xl text-white"
                            onClick={() => alert("Service not Available")}>
                            <i className='bx bxl-google-plus text-2xl'  ></i>
                            Continue with Google
                        </button>
                    </div>
                    <div className="divider my-1">OR</div>

                    <form action="" onSubmit={registerHandler}>
                        <div>
                            <label htmlFor="name" className="label">Name</label>
                            <input className='input rounded-sm w-full bg-zinc-100 p-2' type="text" name="name" id="name" placeholder='Enter Name...'
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email" className="label">Email address</label>
                            <input className='input rounded-sm w-full bg-zinc-100 p-2' type="email" name="email" id="email" placeholder='Enter Email address...'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="label">Password</label>
                            <input className='input rounded-sm w-full bg-zinc-100 p-2' type="password" name="password" id="password" placeholder='Enter Password...'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='my-2 flex items-center text-sm text-black'>
                            <input className='checkbox border-2 border-zinc-400 rounded-sm checkbox-xs me-2' id='policy' type="checkbox" checked={terms}
                                onChange={() => setTerms(!terms)} />
                            <label htmlFor="policy"> I agree to the Terms and Privacy Policy</label>
                        </div>

                        {
                            error && <div className="text-red-500">{error}</div>
                        }
                        <button className="w-full btn rounded-sm text-white  mt-1" type='submit'>
                            {
                                loader ?
                                    <span className="loading loading-bars loading-md"></span>
                                    :
                                    <span>Register</span>
                            }
                        </button>

                        <div className='text-center text-sm mt-2'>
                            Already have an Account?
                            <Link to={"/login"} className="underline"> Login here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register