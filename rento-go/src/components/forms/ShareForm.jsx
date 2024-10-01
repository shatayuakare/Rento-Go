import React, { useState } from 'react'

const ShareForm = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [zip, setZip] = useState("")

    const shareHandler = (event) => {
        event.preventDefault()

        const data = {
            name: fname + " " + lname,
            email, phone, zip
        }

        console.log(data)
    }

    return (
        <form className='grid gap-8' action="" onSubmit={shareHandler} >
            <div className='text-zinc-500'>
                <h4 className='text-2xl font-semibold text-zinc-700'>Get started</h4>
                Submit the form to the start
            </div>
            <div>
                <label htmlFor="fname" className="lebel required text-sm">First Name</label>
                <input className='input rounded-none w-full h-9 ps-0    bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="text" name="fname" id="fname"
                    value={fname}
                    onChange={(event) => setFname(event.target.value)} />
            </div>
            <div>
                <label htmlFor="lname" className="lebel required text-sm">Last Name</label>
                <input className='input rounded-none w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="text" name="lname" id="lname"
                    value={lname}
                    onChange={(event) => setLname(event.target.value)} />
            </div>
            <div>
                <label htmlFor="email" className="lebel required text-sm">Email Address</label>
                <input className='input rounded-none w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="email" name="email" id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <label htmlFor="phone" className="lebel required text-sm">Phone Number</label>
                <input className='input rounded-none w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="tel" name="phone" id="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)} />
            </div>
            <div>
                <label htmlFor="zip" className="lebel required text-sm">Zip Code</label>
                <input className='input rounded-none w-full h-9 ps-0 bg-transparent border-0 border-b-2 border-zinc-400 focus:border-b-2 focus:border-zinc-600' type="number" name="zip" id="zip"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)} />
            </div>

            <div className='text-end'>
                <button className='btn text-white rounded-md px-10' type='submit'>
                    <img className='h-5' src="https://www.pngall.com/wp-content/uploads/13/White-Arrow-PNG-Image-HD.png" alt="" />
                </button>
            </div>
        </form>
    )
}

export default ShareForm