import React from 'react'

const CustomerReview = () => {

    const reviews = [
        {
            img: "https://i.pinimg.com/736x/ab/c7/bf/abc7bf298ad6883c969763b8ccb29c1d.jpg",
            auher: "Tommy & Jerry",
            title: "Excellent service! car rent service",
            msg: "We have been using rentaly for our trips need for several years now and always been happy with their service. Their customer support is excellent servicel and they are alway available to help with any issue we have. There price are also campetitive"
        },
        {
            img: "https://img.freepik.com/premium-photo/young-woman-driver-enjoying-warm-summer-day-standing-beside-her-car-city-street-travelling-vacation-concept_127089-13899.jpg",
            auher: "Takala lakhha",
            title: "Excellent service! car rent service",
            msg: "I have been using rentaly for my car rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend rental to anyone looking for a reliable car rentali provider."
        },
        {
            img: "https://www.shutterstock.com/image-p  hoto/mature-tattooed-man-standing-near-600nw-2303495953.jpg",
            auher: "Chota Bhim",
            title: "Excellent service! car rent service",
            msg: "Endorsed by the industry experts, rentaly is the car rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure car rental service"
        },
    ]

    return (
        <section className="h-auto min-h-auto content-center text-zinc-700 bg-zinc-100 customer-review" >
            <div className="sm:w-4/5 md:w-4/5  text-center mx-auto">
                <h4 className='text-center sm:text-3xl md:text-5xl font-bold pb-5'>What our customer saying...</h4>

                <div className="flex gap-8 mt-6 sm:flex-col flex-wrap lg:flex-row">

                    {
                        reviews.map((elem, index) => (
                            <div className={`flex-1 shadow-xl bg-[url('${elem.img}')] bg-cover border rounded-2xl bg-center h-[60vh] content-end overflow-hidden`} key={index}>
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