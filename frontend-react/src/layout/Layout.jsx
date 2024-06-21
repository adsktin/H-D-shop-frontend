import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Products from '../components/Products';
import CarouselTUK from '../components/Carousel';
import { FeaturedImageGallery } from '../components/OverviewProduct';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Cart from '../pages/Auth/Cart';
import Payment from '../pages/Auth/Payment';
import OrderSuccess from '../pages/Auth/OrderSuccess';
import OrderFail from '../pages/Auth/OrderFail';

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
      {/* <Login/>
      <Signup/> */}
      {/* <Cart/> */}
      {/* <Payment/> */}
      <OrderSuccess/>
      <OrderFail/>
    </div>
  );
}

export default Layout;
