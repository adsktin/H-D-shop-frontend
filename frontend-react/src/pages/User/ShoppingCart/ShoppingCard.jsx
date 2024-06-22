import React, { useState } from 'react';
import Order from "./Order"
import CartItem from './CartItem';
export default function ShoppingCard() {
  return (
    <div>
         <div className="bg-white">
      <div className="py-8 max-w-7x1 container mx-auto px-4 ">
         <h2 className="mb-4 ml-[325px] text-1">
          <a href="#">
              Trang chủ
          </a>
          <span className=" ml-4"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 2 24 24" strokeWidth={1.2} stroke="currentColor" className="inline-block size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
          </svg>
          </span>
          <span className="ml-4 font-bold">Giỏ hàng </span>
          </h2>
          <h3 className="border-t-2 border-gray-500 ml-10 mb-7"></h3>
        <div className="flex flex-col md:flex-row  justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3 ">
            {/* {
              // carts.length ? (carts.map((p)=> <CartItem product={p} key={p.id}/>)) :
              <p className="my-4 ml-[400px] w-full text-3xl font-bold p-6">Giỏ hàng của bạn đang trống </p>
            } */}
            <CartItem/>
          </div>
          <div className="md:w-1/3 "><Order/></div>
        </div>   
      </div>
    </div>
    </div>
  )
}
