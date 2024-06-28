import { Rating } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AccountFavourite() {
  const [favoriteProducts, setFavoriteProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg', // Đường dẫn ảnh (cần thay thế)
      price: 29990000, // Giá sản phẩm
      discount: 27990000,
      color: "Titan vàng",
      storage: "128GB",
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      brand: 'Samsung',
      image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png', // Đường dẫn ảnh (cần thay thế)
      price: 25990000,
      discount: 24990000,
      color: "Vàng",
      storage: "8GB/128GB",
    },
    {
      id: 3,
      name: 'Xiaomi 13 Pro',
      brand: 'Xiaomi',
      image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png', // Đường dẫn ảnh (cần thay thế)
      price: 22990000,
      discount: 21990000,
      color: "Trắng",
      storage: "8GB/128GB",
    },
    // Thêm các sản phẩm yêu thích khác tại đây
  ]);

  return (
    <div className="mx-auto container my-4">
      <h2 className="text-2xl font-bold mb-4">Sản phẩm yêu thích</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {favoriteProducts.map(product => (
          <ProductCard key={product.id} name={product.name} imageUrl={product.image} price={product.price} discount={product.discount} color={product.color}/>
        ))} */}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteProducts.map(product => (
          <div key={product.id} className="border rounded-md p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover mb-2 p-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.brand}</p>
            <p className="text-red-500 font-bold">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {favoriteProducts.map((product) => (
            <Link key={product.id} to={product.href} className="rounded-lg shadow-2xl group p-2">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <div className='mx-4'>
                <h3 className="w-full px-1 mt-4 text-lg text-black truncate line-clamp-1">{product.name}{" "}{product.storage} </h3>
                <div className='items-center lg:flex'>
                  <p className="px-1 mt-1 text-lg font-bold text-red-600">
                  {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </p>
                  <p className="px-1 mt-1 text-sm font-medium text-gray-600 line-through">{product.discount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                </div>
              </div>
              <div className="my-4 flex items-center justify-center">
                {/* <Rating value={4} className="text-amber-500" /> */}
                {/* <Typography className="!text-sm font-bold !text-gray-700">
                4.0/5
                </Typography> */}
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}
