import React from 'react'

const PageHeading = ({ title }) => {

    return (
        <div className="h-[45vh] pt-24 flex items-center justify-center bg-[black] text-white capitalize text-center">
            <div className='text-4xl font-bold w-1/3'>
                {title}
            </div>
        </div>
    )
}

export default PageHeading