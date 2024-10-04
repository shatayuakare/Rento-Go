import React, { useState } from 'react'
import axios from 'axios'
import { Cookies } from "react-cookie"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState(null)

    const cookie = new Cookies()

    const loginHandler = async (event) => {
        event.preventDefault()

        if (!email) return setError("Email is rquired")
        if (!password) return setError("Password is rquired")

        const data = { email, password }
        await axios.post("https://rento-go.onrender.com/auth/login", data).then((res) => {
            if (remember) {
                cookie.set("token", res.data.token, { expires: new Date(Date.now() + 31536000000) })
            } else {
                cookie.set("token", res.data.token, {
                    expires: new Date(Date.now() + 30 * 60 * 1000),
                    path: '/',
                    secure: true,
                    httponly: true,
                });
            }

            toast.success(res.data.message)
            window.location.reload()
        }).catch((err) => toast.error(err.response.data.message),)

        setEmail("")
        setPassword("")
        setRemember(false)
    }

    return (
        <section className="content-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2  md:mx-10 lg:mx-20 xl:mx-28 min-h-[80vh] sm:pt-16 md:pt-0">

                <div className="capitalize bg-[url('https://www.classicgarage.ca/wp-content/uploads/2022/03/Classic-BMW-Web-Clean-JPEG-3000px-53-1024x683.jpg')]">
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
                <div className="bg-white text-zinc-800 xl:px-20 lg:px-16 md:px-10 content-center sm:p-6">
                    <div>
                        <h5 className='text-2xl font-bold py-1'>Login Account</h5>
                        <p className="text-sm">
                            We`do love to have you on board. Join our 500+ customers around he globe and enhance productivity.
                        </p>
                    </div>

                    <div className='pb-6 pt-4 grid sm:md:grid-cols-1  md:lg:grid-cols-2 gap-4'>
                        <button className="btn btn-ghost h-10 whitespace-nowrap bg-zinc-200 hover:bg-zinc-300 rounded-2xl"
                            onClick={() => alert("Service not Available")}>
                            <i className='bx bxl-facebook text-2xl font-bold' ></i>
                            Continue with facebook
                        </button>
                        <button className="btn btn-ghost h-10 whitespace-nowrap bg-zinc-200 hover:bg-zinc-300 rounded-2xl"
                            onClick={() => alert("Service not Available")}>
                            <i className='bx bxl-google font-bold text-2xl'  ></i>
                            Continue with Google
                        </button>
                    </div>

                    <div className="divider my-1">OR</div>
                    <form action="" onSubmit={loginHandler}>
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
                            <input className='checkbox border-2 border-zinc-400 rounded-sm checkbox-xs me-2' id='policy' type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)} />
                            <label htmlFor="policy"> Remember me</label>
                        </div>
                        {
                            error && <div className="text-red-500 pb-1 ps-2">
                                {error}
                            </div>
                        }

                        <button className="w-full mt-1 btn rounded-sm text-white py-4" type='submit'>Login</button>

                        <div className='text-center text-sm mt-2'>
                            New Registration?
                            <Link to={"/register"} className="underline"> Register here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login