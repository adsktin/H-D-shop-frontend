import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <Link to="#" className="relative flex-shrink-0 w-full sm:w-auto">
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                    <img src='https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg' alt='aa'
                        className="object-cover object-center w-full" />
                </div>
            </div>
            <div className='m-2'>
                <h3 className="w-full px-1 mt-4 text-lg text-black truncate line-clamp-1">iPhone 13 128GB</h3>
                <div className='items-center lg:flex'>
                    <p className="px-1 mt-1 text-lg font-bold text-red-600">13.690.000đ</p>
                    <p className="px-1 mt-1 text-sm font-medium text-gray-600 line-through">18.990.000đ</p>
                </div>
            </div>
        </Link>
    )
}
