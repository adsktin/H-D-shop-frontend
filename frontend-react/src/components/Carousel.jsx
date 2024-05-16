import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Product from "./Product";



/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function CarouselTUK() {
    return (
        <div className="container mx-auto bg-white shadow-xl rounded-xl">
            <div className="items-center justify-center w-full h-full px-4 py-24 sm:py-8">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="hidden lg:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={10} visibleSlides={4} step={1} infinite={true} isPlaying={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"  />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14">
                                    <Slide index={0} >
                                        <Product/>
                                    </Slide>
                                    <Slide index={1}>
                                         <Product/>
                                    </Slide>
                                    <Slide index={2}>
                                       <Product/>
                                    </Slide>
                                    <Slide index={3}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={4}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={5}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={6}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={7}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={8}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={9}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={10}>
                                      <Product/>
                                        {/* <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div> */}
                                    </Slide>                          
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 " id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="hidden lg:hidden md:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14">
                                    <Slide index={0}>
                                         <Product/>
                                    </Slide>
                                    <Slide index={1}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={2}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="leading-4 text-white texlg:t-xl le text-basealg:ding-tight">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start w-full h-full transition duration-700 ease-out lg:gap-8 md:gap-6">
                                    <Slide index={0}>
                                        <Product/>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="leading-4 text-white texlg:t-xl le text-basealg:ding-tight">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/January2024/AT.220.xd.8_75.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/January2024/AT.220.xd.8_75.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Catalog 2</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}