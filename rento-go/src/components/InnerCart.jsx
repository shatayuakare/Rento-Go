import React from 'react'
import BookForm from './forms/BookForm'

const InnerCart = () => {
    return (
        <section className="sm:px-2 pb-20 md:px-12 lg:px-20 xl:px-28">
            <div className="flex gap-4 pt-24 ">
                <div className="lg:w-3/5 flex flex-col gap-2 ">

                    <div className="border-2 bg-white h-[54vh]">

                    </div>
                    <div className='border-2 bg-white h-[18vh]'>

                    </div>

                </div>
                <div className="lg:w-2/5 border-2 sm:py-6 sm:px-4 md:px-6 rounded-lg bg-red-100">
                    <BookForm />
                </div>
            </div>
            <div className="text-zinc-700">
                <div className="md:w-1/2">
                    <h5 className='text-3xl pt-12 pb-4 font-bold'>
                        Vehicle Name
                    </h5>
                    <p className='text-zinc-600'>
                        Vehicle deail
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti eveniet sapiente aperiam ea, esse eum quidem deserunt officiis cumque.
                    </p>
                </div>

                <div className='md:w-1/2'>
                    <h6 className="text-2xl py-6 font-semibold">Specializations</h6>

                    <div className='flex justify-between md:w-2/5 pb-5'>
                        <div>
                            left
                        </div>
                        <div>
                            right
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnerCart