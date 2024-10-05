import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")

    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(false)


    const contactHandler = async (event) => {
        event.preventDefault()

        if (!name) return setError("Name is required")
        if (!email) return setError("Email is required")
        if (!phone) return setError("Phone is required")
        if (!msg) return setError("Message is required")

        const data = {
            name, email, phone, message: msg
        }
        setLoader(true)
        await axios.post("https://rento-go.onrender.com/contacts/new", data).then(res => {
            toast.success(res.data.message)
            setLoader(false)
        }).catch(err => {
            toast.error(err.response.data.message)
            setLoader(false)
        })

        setLoader(false)
        setName("")
        setEmail("")
        setPhone("")
        setMsg("")
    }

    return (
        <form className='grid gap-4' action="" onSubmit={contactHandler}>
            <div>
                <label htmlFor="name" className="label">Full Name</label>
                <input className='input rounded-sm w-full bg-zinc-100 p-2' type="name" name="name" id="name" placeholder='Enter Full name...'
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
                <label htmlFor="email" className="label">Phone Number</label>
                <input className='input rounded-sm w-full bg-zinc-100 p-2' type="tel" name="phone" id="phone" placeholder='Enter phone number...'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label htmlFor="message" className="label">Message</label>
                <textarea className='textarea resize-none rounded-sm w-full bg-zinc-100 p-2' name="message" id="message"
                    placeholder='Enter message...' value={msg}
                    onChange={(event) => setMsg(event.target.value)}></textarea>
            </div>
            {
                error && <div className='text-red-500'>{error}</div>
            }
            <div className='text-center'>
                <button type='submit' className="btn text-white h-11 rounded-sm">
                    {
                        loader ?
                            <span className="loading loading-bars loading-md"></span>
                            :
                            <span>Contact Now</span>
                    }
                </button>
            </div>
        </form>

    )
}

export default ContactForm