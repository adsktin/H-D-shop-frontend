import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Products from '../components/Products';
import CarouselTUK from '../components/Carousel';
import { FeaturedImageGallery } from '../components/OverviewProduct';

function Layout() {
  return (
    <div className="">
      <Header/>
      {/* <h1 className="text-3xl font-bold text-center bg-red-500">Hello, React with Vite and Tailwind!</h1> */}
      {/* <div className='text-gray-500'> this is div app</div> */}
      <div className='my-10'>
        <CarouselTUK/>
      </div>
      <Products/>
      <FeaturedImageGallery/>
      <Footer/>
    </div>
  );
}

export default Layout;
