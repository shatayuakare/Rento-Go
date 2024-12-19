import React, { useEffect, useState } from 'react'
const VehicleView = ({ data }) => {
    const [mainImg, setMainImg] = useState()

    useEffect(() => {
        console.log(data)
        // setMainImg(data.images[0])
    }, [])


    return (
        <dialog id="vehicleview" className="modal modal-bottom sm:modal-middle text-sm capitalize">
            <div className="modal-box bg-white p-3 shadow  w-[90%] capitalize relative">
                <form method="dialog">
                    <button className="btn z-10 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="flex flex-col  gap-2">
                    <div className="flex flex-col gap-2 ">

                        <div className="border-2 bg-white w-full  overflow-hidden p-2 px-4">
                            <img className='mx-auto w-full' src={mainImg} alt={data.brand} />
                        </div>
                        <div className='border-2 flex overflow-x-auto gap-2 p-2 pb-0 bg-white sm:h-[12vh] md:h-[16vh] lg:h-[18vh]'>
                            {
                                // data.images.map((img, index) => (
                                //     <img className='h-full'
                                //         onClick={() => setMainImg(img)}
                                //         src={img} key={index} alt="" />
                                // ))
                            }
                        </div>
                    </div>
                    <div className="lg:w-2/5 border-2 sm:py-6 sm:px-4 md:px-6 rounded-lg bg-blue-50 content-center">

                    </div>
                </div>
            </div>
        </dialog >
    )
}

export default VehicleView