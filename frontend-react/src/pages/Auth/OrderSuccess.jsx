// import React, { useState } from 'react';

import {
    Button,
  } from "@material-tailwind/react";
const OrderSuccess = () => {

    return (
        <div className=''>
            <div className="m-0 grid place-items-center px-4 py-16">
            <div color="white" className='px-12 py-12 shadow-2xl lg:w-1/3'>
                <h1 className="text-2xl font-bold text-center">Đặt hàng thành công</h1>
                <h2 className="max-w-12 ml-40 mt-4 ">                                     
                        <img src="https://cdn-icons-png.flaticon.com/512/148/148767.png"  />
                </h2>
                <div className="mt-4">
                <p className="text-gray-600 text-center mx-6">Nếu muốn xem lại chi tiết đơn hàng vui lòng vào lịch sử mua hàng!</p>
                </div>

                <div className="mt-4">
                <h2 className="text-2xl font-bold text-center">Thông tin thanh toán</h2>

                <table className="w-full mt-4">
                    <thead>
                    <tr>
                        <th className="text-left px-4 py-2 border">Thông tin</th>
                        <th className="text-right px-4 py-2 border">Giá trị</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-left px-4 py-2 border">Mã đơn hàng</td>
                        <td className="text-right px-4 py-2 border">OD1718170986442</td>
                    </tr>
                    <tr>
                        <td className="text-left px-4 py-2 border">Số tiền thanh toán</td>
                        <td className="text-right px-4 py-2 border">26,490,000đ</td>
                    </tr>
                    <tr>
                        <td className="text-left px-4 py-2 border">Phương thức thanh toán</td>
                        <td className="text-right px-4 py-2 border">COD</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className="mt-8 text-center">
                    <Button className="my-4 py-4 hover:text-[#01405DFF]" size="lg">
                        Quay lại trang chủ
                    </Button>
                    
                </div>
            </div>           
        </div> 
    </div> 
    
       
   );
}

export default OrderSuccess;
