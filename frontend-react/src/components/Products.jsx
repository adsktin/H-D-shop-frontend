import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'iPhone 13 128GB',
    color: "pink",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '#',
    price: '13.690.000đ',
    discount: '18.990.000đ',
    imageSrc: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'iPhone 13 128GB',
    color: "pink",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '#',
    price: '13.690.000đ',
    discount: '18.990.000đ',
    imageSrc: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'iPhone 13 128GB',
    color: "pink",
    brand: 'https://www.svgrepo.com/show/508866/os-apple.svg',
    href: '#',
    price: '13.690.000đ',
    discount: '18.990.000đ',
    imageSrc: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'iPhone 13 128GB',
    color: "pink",
    brand: 'https://www.svgrepo.com/show/342072/nokia.svg',
    href: '#',
    price: '13.690.000đ',
    discount: '18.990.000đ',
    imageSrc: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'iPhone 13 128GB',
    color: "pink",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2022/09/07/logoooooooooooooooo.png',
    href: '#',
    price: '13.690.000đ',
    discount: '18.990.000đ',
    imageSrc: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    color: "gold",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '#',
    price: '26,490,000đ',
    discount: '33,990,000đ',
    imageSrc: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
     {
    id: 7,
    name: 'Samsung Galaxy S24 Ultra',
    color: "gold",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '#',
    price: '26,490,000đ',
    discount: '33,990,000đ',
    imageSrc: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
     {
    id: 8,
    name: 'Samsung Galaxy S24 Ultra',
    color: "gold",
    brand: 'https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png',
    href: '#',
    price: '26,490,000đ',
    discount: '33,990,000đ',
    imageSrc: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2024/01/16/s24-ultra-vang.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
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
            <Link key={product.id} to={product.href} className="rounded-lg shadow-2xl group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <div className='m-2'>
                <h3 className="w-full px-1 mt-4 text-lg text-black truncate line-clamp-1">{product.name}</h3>
                <div className='items-center lg:flex'>
                  <p className="px-1 mt-1 text-lg font-bold text-red-600">{product.price}</p>
                  <p className="px-1 mt-1 text-sm font-medium text-gray-600 line-through">{product.discount}</p>
                </div>
              </div>
 
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
