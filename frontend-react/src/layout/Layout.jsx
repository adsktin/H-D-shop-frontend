import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Products from '../components/Products';
import CarouselTUK from '../components/Carousel';
import { FeaturedImageGallery } from '../components/OverviewProduct';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Cart from '../pages/Auth/Cart';
import ProductDetail from '../components/ProductDetail/ProductDetail';


function Layout() {
  return (
    <div className="h-full bg-gray-100 w-sreen h-">
      <Header/>
      {/* <div className='my-10'>
        <CarouselTUK/>
      </div>
      <Products/>
      <FeaturedImageGallery/>
      <Footer/> */}
      {/* <Login/>
      <Signup/> */}
      {/* <Cart/> */}
      <ProductDetail/>
      
    </div>
  );
}

export default Layout;
