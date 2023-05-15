import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import foto1 from '../assets/images/carosello/progetto1mobile.png';
export default function Carousel() {
    return (
        <>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop
          navigation
          className='max-h-fit mt-6'
        >
          <SwiperSlide><Image src={foto1} alt=''/></SwiperSlide>
          
        </Swiper>
        </>
      );
}
