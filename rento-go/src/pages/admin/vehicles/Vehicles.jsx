import React from 'react'
import { Outlet } from 'react-router-dom'

const Vehicles = () => {
    return (
        <div className="w-full h-full flex flex-col gap-4 overflow-y-auto">
            <div className="bg-blue-500 h-[20%] min-h-[20%] grid grid-cols-3 items-center px-16 gap-10">
                <div className="flex items-center justify-center h-3/4 bg-orange-500 rounded-sm shadow-md p-3">
                    Flex 1
                </div>
                <div className="flex-1 bg-green-500 rounded-sm shadow  h-3/4">
                    Flex 1
                </div>
                <div className="flex  h-3/4 bg-violet-500  rounded-sm shadow">
                    Flex 1
                </div>
            </div>

            <div className="bg-white p-6 pt-2">
                <Outlet />
            </div>
        </div>
    )
}

export default Vehicles