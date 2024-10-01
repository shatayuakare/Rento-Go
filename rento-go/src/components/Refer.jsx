import React, { useState } from 'react'

const Refer = () => {

    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)


    const referHandler = (event) => {
        event.preventDefault()
        if (!phone) return setError("Phone is required for refer")
        if (!email) return setError("Email is required for refer")

        const data = {
            phone, email
        }

        console.log(data)
    }

    return (
        <section className='capitalize  text-zinc-700 bg-zinc-50 py-12'>

            <div className='text-center text-5xl font-bold pb-10' >
                When you Refer a Friend
            </div>

            <div className="flex flex-col gap-8 md:w-3/5 mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6  border-2 bg-zinc-100 rounded-lg border-zinc-300">
                        <h5 className='text-[4rem] font-bold'>
                            +10%
                        </h5>
                        <h6 className='text-2xl font-semibold py-1'>
                            When is car is live
                        </h6>
                        <p className="text-lg text-zinc-600">
                            You get $2000 bonus when your friend become host and list their first car.
                        </p>
                    </div>

                    <div className="p-6  border-2 bg-zinc-100 rounded-lg border-zinc-300">
                        <h5 className='text-[4rem] font-bold'>
                            +25%
                        </h5>
                        <h6 className='text-2xl font-semibold py-1'>
                            Referred Host Earnings
                        </h6>
                        <p className="text-lg text-zinc-600">
                            You'll also get equivalent of 25% of your friends earnings for their first 60 days after listing a car.
                        </p>
                    </div>
                </div>

                <div className="py-12 w-full text-center bg-zinc-100 rounded-lg border-2 border-zinc-300">

                    <h5 className='text-[3rem] font-bold pb-3'>Refer a Friend</h5>
                    <p className='text-md text-zinc-600 mb-2'>
                        Input your information to get referral Link ofour submit a Reference.
                    </p>

                    <form className='md:w-1/2 mx-auto sm:full' action="" onSubmit={referHandler}>
                        <div className='flex flex-col gap-6 p-2'>
                            <input className='input w-full bg-white p-2 rounded-md' type="tel" name="phone" placeholder='Friend Phone number...'
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)} />

                            <input className='input rounded-md w-full bg-white p-2' type="email" name="email" placeholder='Friend Email address...'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />

                            {
                                error && <div className='text-red-500 text-start'>{error}</div>
                            }
                            <button type='submit' className='btn text-white rounded-md h-11 w-1/3 mx-auto'>
                                Refer A Friend
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Refer