import React from 'react'

const PageHeading = ({ children }) => {

    return (
       <div className="bg-[url('https://wallpapers.com/images/hd/4k-ultra-hd-porsche-kq0oymvwxbwgclsc.jpg?format=webp&quality=auto')] bg-center bg-cover ">
        <div className="pt-20 bg-black bg-opacity-40">

         <div className="h-[35vh] text-white uppercase text-center">
            <div className="h-full w-full flex items-center justify-center ">
                <div className='text-4xl font-bold w-1/3'>
                    {children}
                </div>
            </div>
        </div>
        </div>
       </div>
    )
}

export default PageHeading