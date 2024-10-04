import React from 'react'
import reviews from "../../api/customerReview.json"

const CustomerReview = () => {

    return (
        <section className="h-auto min-h-auto content-center text-zinc-700 bg-white customer-review" >
            <div className="sm:w-4/5 md:w-4/5  text-center mx-auto">
                <h4 className='text-center sm:text-3xl md:text-5xl font-bold pb-5'>
                    What our customer saying...
                </h4>

                <div className="flex gap-8 mt-6 sm:flex-col flex-wrap lg:flex-row">

                    {
                        reviews.map((elem, index) => (
                            <div className={`flex-1 shadow-xl bg-cover border rounded-2xl bg-center h-[60vh] content-end overflow-hidden`} key={index} style={{ backgroundImage: `url('${elem.img}')` }}>
                                <div className="bg-black hidden overlay bg-opacity-35 w-full text-left  p-4 text-zinc-100">
                                    <h5 className='text-lg font-bold'>{elem.title}</h5>
                                    <p className="text-xs py-2">
                                        {elem.msg}
                                    </p>
                                    <div className='font-semibold flex items-center'>
                                        <hr className='flex sm:w-8 md:w-12 me-3 border-2 rounded-full text-sm' /> {elem.auher}</div>
                                </div>
                            </div>
                        ))
                    }

                </div>


            </div>
        </section>
    )
}

export default CustomerReview