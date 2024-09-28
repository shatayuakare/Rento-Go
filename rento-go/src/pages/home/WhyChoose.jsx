import React from 'react'

const WhyChoose = () => {

    const getMonthString = () => {
        const months = [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const date = new Date()
        const month = date.getMonth()

        return months[month] + " " + date.getDate()
    }


    return (
        <div className="grid sm:grid-cosl-1 lg:grid-cols-2 gap-4 py-10">
            <div className="px-8">
                <h5 className='text-5xl py-5 font-bold text-zinc-700'>Why Choose Us</h5>
                <p className="text-zinc-500">
                    Booking a self-driving car with us in simple and easy. You can browse our selection of vehicles online choose the car that best fits your needs, and book it for the duration of your choice.
                </p>
            </div>
            <div className="flex lg:flex-row sm:flex-col justify-around rounded-[2rem] h-fit py-6 items-center text-center lg:shadow-md lg:border lg:bg-zinc-100 text-zinc-500 sm:gap-6 lg:gap-0">
                <div className="flex-1 place-items-center">
                    <div className="">Success Tour</div>
                    <div className="stat-value text-primary">31K</div>
                    <div className="">From Jan 1st to &nbsp;
                        {getMonthString()}
                    </div>
                </div>

                <div className="flex-1 place-items-center">
                    <div className="">Happy Customer</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className=" text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="flex-1 place-items-center">
                    <div className="">New Registers</div>
                    <div className="stat-value text-green-500">1,200</div>
                    <div className="">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose