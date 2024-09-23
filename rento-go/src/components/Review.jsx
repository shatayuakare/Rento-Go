import React from 'react'
import ReviewCard from './ReviewCard'

const reviews = [
    {
        name: "",
        img: "",
        msg: "",
        rate: 4
    },

]

const Review = () => {
    return (
        <section className="content-center">
            <h4 className='capitalize lg:w-2/3 mx-auto text-center text-zinc-800 font-bold text-5xl'>
                What your neighors are saying About Rento-GO
            </h4>

            <div className="sm:mx-4 md:mx-12 lg:mx-20 xl:mx-28 sm:flex md:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ReviewCard name={"Shatayu Akare"} msg={"Kaise ho"} rate={5} />

            </div>
        </section>
    )
}

export default Review