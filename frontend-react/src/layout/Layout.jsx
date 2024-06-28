import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';


import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <div className="h-full bg-gray-100 w-sreen h-">
      <Header/>
      {/* <div className='my-10'>
        <CarouselTUK/>
      </div>
      <Products/>
      <FeaturedImageGallery>*/}
      <Outlet/>
      <Footer/>
      
     
    </div>
  );
}

export default Layout;
