import React from 'react'
import {
  Card, CardBody
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
export default function Blog() {
  return (
    <div className='mx-auto container my-8 h-screen'>
        <Card>
             <h1 className='text-3xl text-center my-8'>BLOG</h1>
            <CardBody>
                <Link to="/blogdetail">
                    <div className="relative mt-2 flex gap-x-4 bg-gray-200 rounded-lg">
                        <img src="https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/14/iphone-15-pro-max-natural-titanium-4-hhm.jpg" alt="" className="w-1/5 rounded-lg p-4" />
                        <div className="">
                        <p className="text-3xl font-semibold text-gray-900 my-6">               
                            <span className="absolute inset-0" />
                            iPhone 15 Series chính thức ra mắt                  
                        </p>
                        <p className="text-xl text-gray-600">Sự kiện iPhone 15. iPhone 15 Series chính thức ra mắt vào 0h ngày 13/09/2023 tại sự kiện Wonderlust được tổ chức bởi Apple cùng Apple Watch Series 9 và Apple Watch Ultra 2. </p>
                        </div>
                    </div>
                </Link>
            </CardBody>
            <CardBody>
                <Link to="#">
                    <div className="relative mt-2 flex gap-x-4 bg-gray-200 rounded-lg">
                        <img src="https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/14/iphone-15-pro-max-natural-titanium-4-hhm.jpg" alt="" className="w-1/5 rounded-lg p-4" />
                        <div className="">
                        <p className="text-3xl font-semibold text-gray-900 my-6">               
                            <span className="absolute inset-0" />
                            iPhone 15 Series chính thức ra mắt                  
                        </p>
                        <p className="text-xl text-gray-600">Sự kiện iPhone 15. iPhone 15 Series chính thức ra mắt vào 0h ngày 13/09/2023 tại sự kiện Wonderlust được tổ chức bởi Apple cùng Apple Watch Series 9 và Apple Watch Ultra 2. </p>
                        </div>
                    </div>
                </Link>
            </CardBody>
        </Card> 
      
    </div>
  )
}

