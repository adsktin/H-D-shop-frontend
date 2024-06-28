import React, { useState } from 'react';

// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from "../redux/carts/actions";
// import { addQuantity, removeQuantity } from "../redux/products/actions";
// import { IoMdClose } from "react-icons/io";

const CartItem =() =>{
  return (
    <div>
       <div className="rounded-lg ml-10 border bg-white">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src= ' https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg'
                alt="product-image"
                className="w-full h-28 rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">

                {/* product details */}
                <div className="mt-5 sm:mt-0">
                    
                  <h2 className="text-lg font-bold text-gray-900">
                  Samsung Galaxy S24 Ultra
                  </h2>
                  <span className="mt-1 text-sm text-red-700">26,490,000đ </span>
                  <span className="line-through ml-1 text-sm text-gray-700">33,990,000đ </span>
                </div>

                  {/* add & minus quantity */}
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <button className="lws-removeFromCart ml-24">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>   
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      // type="number"
                      // value={quantity}
                      value={1}   
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 ml-10">
                <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Tổng giá trị</p>
                    <p className="text-gray-700">26,490,000đ</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-700">Giảm giá: </p>
                    <p className="text-gray-700">
                        {/* {subTotal > 0 ? "$4.99" : 0} */}
                        0
                        </p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <p className="text-lg font-bold">Tổng thanh toán: </p>
                    <div className="">
                    <p className="mb-1 text-lg font-bold text-red-500">
                        {/* ${subTotal > 0 ? totalBillings(subTotal) : 0} USD */}
                        26,490,000đ
                        </p>
                    </div> 
                </div>
            </div>
    </div>
    );
};

export default CartItem;