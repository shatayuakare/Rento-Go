import React from 'react'
import Refer from "../components/Refer"
import ShareForm from '../components/forms/ShareForm'

const ShareVehicle = () => {
    return (

        <>
            <section className="content-center">

                <div className="sm:mx-4 md:mx-12 lg:mx-20 xl:mx-28 grid sm:grid-cols-1 lg:grid-cols-2">
                    <div className="">
                        <ShareForm />
                    </div>
                    <div className="">

                    </div>
                </div>

            </section>
            <Refer />
        </>
    )
}

export default ShareVehicle