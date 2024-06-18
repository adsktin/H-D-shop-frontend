import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Products from '../components/Products';
import CarouselTUK from '../components/Carousel';
import { FeaturedImageGallery } from '../components/OverviewProduct';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

function Layout() {
  return (
    <div className="bg-gray-100 w-sreen h-full h-">
      <Header/>
      {/* <div className='my-10'>
        <CarouselTUK/>
      </div>
      <Products/>
      <FeaturedImageGallery/>
      <Footer/> */}
      <Login/>
      <Signup/>
    </div>
  );
}

export default Layout;
