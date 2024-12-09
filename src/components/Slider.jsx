// src/components/Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/swiper-bundle.min.css';

const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide><img src="/assets/images/banner1.jpg" alt="Banner 1" /></SwiperSlide>
      <SwiperSlide><img src="/assets/images/banner2.jpg" alt="Banner 2" /></SwiperSlide>
      <SwiperSlide><img src="/assets/images/banner3.jpg" alt="Banner 3" /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
