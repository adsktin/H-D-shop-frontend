import React, { useState } from 'react';
import {
    Card,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
  } from "@material-tailwind/react";
  
    function Order () {
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        // address '',
        // ... (các trường khác)
      });
  return (
    <div className="p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0">
      <div className="mb-2 ">
        <p className="mt-4 text-lg font-bold text-center text-lg-black">Thông tin đặt hàng</p>
        <p className="mt-4 mb-4 text-sm italic text-center text-gray-500">Vui lòng nhập đủ các trường thông tin</p>
      </div>
      <form
        className="space-y-4 text-[#534F4F]"
      >
        <div className="space-y-2 border border-black rounded">
          <input
            name="Họ và tên" 
            type="text"
            placeholder='Họ và tên' 
            required
            autoFocus                 
            class="block w-full bg-white px-2 py-2 text-black placeholder:text-gray-500  sm:text-sm sm:leading-6 rounded"/>
        </div>
        <div className="space-y-2 border border-black rounded">
          <input
            name="phone" 
            type="text"
            placeholder='Số điện thoại' 
            required
            autoFocus                 
            class="block w-full bg-white px-2 py-2 text-black  placeholder:text-gray-500  sm:text-sm sm:leading-6 rounded"/>
        </div>
        <Typography variant="h6" color="black" className="">
            Địa chỉ giao hàng
        </Typography>
        <div className="space-y-2 border border-black rounded">
                <input 
                    name="name" 
                    type="text"
                    placeholder='Địa chỉ' 
                    required
                    autoFocus                 
                    class="block w-full bg-white px-2 py-2 text-black  placeholder:text-gray-500  sm:text-sm sm:leading-6 rounded"/>
                </div>
        <Typography variant="h6" color="black" className="">
            Chọn phương thức thanh toán
        </Typography>
        <div className="space-y-2 ">
            <Select color="blue" label="Chọn phương thức">
                <Option>Thanh toán Momo</Option>
                <Option>Thanh toán ZaloPay</Option>
                <Option>Thanh toán khi nhận hàng</Option>
            </Select>
        </div>  
      <button className="mt-6 w-full rounded-md bg-[#01405DFF] py-1.5 font-medium text-white hover:bg-black">
        Xác nhận và Thanh toán
      </button>
      </form>
    </div>
    )
}
export default Order;