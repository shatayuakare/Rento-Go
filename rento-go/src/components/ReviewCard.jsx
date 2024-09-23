import React from 'react'

const ReviewCard = ({ name, msg, rate }) => {
    return (
        <div className="p-6 text-zinc-800 bg-white rounded-xl shadow-md hover:shadow-xl">
            <div className='flex justify-between pe-3 items-center'>
                <h4 className='text-xl font-semibold'>{name}</h4>
                <div>
                    <div className="avatar">
                        <div className="mask mask-hexagon w-16">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="rating rating-sm pb-3 gap-1">
                &nbsp;
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-500"
                    defaultChecked={(rate === 1) ? true : undefined} />
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-500"
                    defaultChecked={(rate === 2) ? true : undefined} />
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-500"
                    defaultChecked={(rate === 3) ? true : undefined} />
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-500"
                    defaultChecked={(rate === 4) ? true : undefined} />
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-500"
                    defaultChecked={(rate === 5) ? true : undefined} />
            </div>
            <p className="text-zinc-600">
                {msg}
            </p>
        </div>
    )
}

export default ReviewCard