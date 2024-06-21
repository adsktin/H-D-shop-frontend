// import React, { useState } from 'react';


const Payment = () => {
    return (
        <div className="bg-white">
            <div className="py-8 max-w-7x1 container mx-auto px-4 ">
                <h2 className="mb-4 ml-[325px] text-1">
                    <a href="#">
                        Trang chủ
                    </a>
                    <span className=" ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 2 24 24" strokeWidth={1.2} stroke="currentColor" className="inline-block size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span className="ml-4 font-bold">Thanh toán </span>
                </h2>
                <h3 className="border-t-2 border-gray-500 ml-10 mb-7"></h3>
                <div className="flex flex-col md:flex-row ml-10 justify-between md:gap-8 gap-4">
                    <div className="space-y-6 md:w-1/2 ">
                        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4">
                            <h2 className="text-lg font-bold mb-4">Thông tin đơn hàng</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Mã hóa đơn
                                </label>
                                <h2 className="text-lg font-bold mb-4">OD1718170986442</h2>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Mô tả
                                </label>
                                <h2 className="text-lg font-bold mb-4"> Thanh toán hóa đơn O </h2>
                            </div>      
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                   Số tiền
                                </label>
                                <h2 className="text-3xl font-bold mb-4"> 26,490,000đ </h2>
                            </div>
                           
                        </div>
                    </div>
                    <div className="space-y-6 md:w-1/2 ">
                        {
                            <div className="bg-[#DC1A8DFF] p-10 rounded-lg shadow-lg w-full">
                                <h1 className="text-2xl font-bold mb-4 text-center text-white">Thanh toán với Momo</h1>
                                <p className="mb-4 text-center text-white">Vui lòng quét mã QR dưới đây để thanh toán</p>
                                <div className="flex justify-center mb-4">
                                    <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-220808102122-637955508824191258.png" alt="Momo QR Code" className="w-48 h-48" />
                                </div>
                                <div className="text-center py-4 px-24">
                                    <span href="#" className=" text-white text-lg">
                                        Sử dụng App MoMo hoặc ứng dụng camera hỗ trợ QR code để quét mã
                                    </span>
                                </div>
                            </div>

                        }
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Payment;