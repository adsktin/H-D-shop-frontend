// import React, { useState } from 'react';

import {
    Button,
  } from "@material-tailwind/react";
const OrderFail = () => {

    return (
        <div className=''>
            <div className="m-0 grid place-items-center px-4 py-16">
            <div color="white" className='px-12 py-12 shadow-2xl lg:w-1/3'>
                <h1 className="text-2xl font-bold text-center">Đặt hàng không thành công</h1>
                <h2 className="max-w-12 ml-40 mt-4 ">                                     
                        <img src="data:image/png;base64,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"  />
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
                        <td className="text-right px-4 py-2 border">MoMo</td>
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

export default OrderFail;
