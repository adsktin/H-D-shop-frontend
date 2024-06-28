import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProductCard from "./Product";

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
    // More products...
  ]

export default function CarouselTUK() {
  return (
    <div className="container mx-auto bg-white shadow-xl rounded-xl my-8">
      <div className="items-center justify-center w-full h-full px-4 py-24 sm:py-8 ">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="hidden lg:block"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={products.length} 
          visibleSlides={4}
          step={1}
          infinite={true}
          isPlaying={true}
        >
          <Slider>
            {products.map((product, index) => (
              <Slide index={index} key={product.id}> 
                <ProductCard product={product} />
              </Slide>
            ))}
          </Slider>
          <ButtonBack className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" id="prev">
            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ButtonBack>
          <ButtonNext className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 " id="next">
            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ButtonNext>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="hidden md:block lg:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={products.length}
          visibleSlides={2}
          infinite={true}
        >
          <Slider>
            {products.map((product, index) => (
              <Slide index={index} key={product.id}>
                <ProductCard product={product} />
              </Slide>
            ))}
          </Slider>
          {/* ... (Buttons for tablet carousel) */}
        </CarouselProvider>

        {/* Carousel for mobile devices */}
        <CarouselProvider
          className="md:hidden block"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={products.length}
          visibleSlides={1}
          infinite={true}
        >
          <Slider>
            {products.map((product, index) => (
              <Slide index={index} key={product.id}>
                <ProductCard product={product} />
              </Slide>
            ))}
          </Slider>
          {/* ... (Buttons for mobile carousel) */}
        </CarouselProvider>
      </div>
    </div>
  );
}
