
import { Link } from 'react-router-dom';
import {
  Rating, Typography, Button,
} from "@material-tailwind/react";
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'iPhone 15',
    color: "màu hồng",
    storage: "128GB",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '/productdetail',
    price: 13690000,
    discount: 18990000,
    imageUrl: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',

  },
  {
    id: 2,
    name: 'iPhone 15',
    color: "màu hồng",
    storage: "128GB",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '/productdetail',
    price: 26490000,
    discount: 33990000,
    imageUrl: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',

  },
  {
    id: 3,
    name: 'iPhone 15',
    color: "màu hồng",
    storage: "128GB",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '/productdetail',
    price: 13690000,
    discount: 18990000,
    imageUrl: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',
  },
  {
    id: 4,
    name: 'iPhone 15',
    color: "màu hồng",
    storage: "128GB",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '/productdetail',
    price: 13690000,
    discount: 18990000,
    imageUrl: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',

  },
  {
    id: 5,
    name: 'iPhone 15',
    color: "màu hồng",
    storage: "128GB",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '/productdetail',
    price: 13690000,
    discount: 18990000,
    imageUrl: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',

  },
   {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    color: "màu vàng",
    storage: "8GB/128GB",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '/productdetail',
    price: 26490000,
    discount: 33990000,
    imageUrl: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
    
  },
     {
    id: 7,
    name: 'Samsung Galaxy S24 Ultra',
    color: "màu vàng",
    storage: "8GB/128GB",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '/productdetail',
    price: 26490000,
    discount: 33990000,
    imageUrl: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
    
  },
     {
    id: 8,
    name: 'Samsung Galaxy S24 Ultra',
    color: "màu vàng",
    storage: "8GB/128GB",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '/productdetail',
    price: 13690000,
    discount: 18990000,
    imageUrl: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
  },
  {
    id: 9,
    name: 'Samsung Galaxy S24 Ultra',
    color: "màu vàng",
    storage: "8GB/128GB",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '/productdetail',
    price: 13690000,
    discount: 18990000,
    imageUrl: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
  },
  {
    id: 10,
    name: 'Samsung Galaxy S24 Ultra',
    color: "màu vàng",
    storage: "8GB/128GB",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '/productdetail',
    price: 13690000,
    discount: 18990000,
    imageUrl: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
  },
  // More products...
]

export default function Products() {

  return (
     <div className="bg-gray-50">
      <div className="max-w-2xl p-2 mx-auto sm:px-6 sm:py-12 lg:max-w-7xl lg:px-2 sm:block">
         <h2 className="hidden p-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 uppercase sm:block">
            SẢN PHẨM MỚI NHẤT
        </h2>
        <h2 className="block p-4 text-3xl font-bold leading-9 text-center text-gray-900 uppercase sm:hidden">
            SẢN PHẨM MỚI NHẤT
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="rounded-lg shadow-2xl group p-2">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>      
          <div className="mt-8 flex justify-center">
            <Link to="#">
              <Button className="bg-gray-500 hover:bg-blue-500 text-white rounded-md py-2 px-6 text-lg">
                Xem thêm
              </Button>
            </Link>
          </div>
      </div>
    </div>
  )
}
