import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";
const FeaturesSlider = () => {
   
  return (
    <>
    <Swiper
        slidesPerView={3}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide className="bg-white rounded-md p-4">
          <img src="/images/heart.svg" alt="heart"  className="mb-3"/>
          <div className="pl-3">
          <div className="font-[600] text-[#3D5C70] text-[19px] font-[Ubuntu] mb-2">Babies</div>
          <div className='text-[#3D5C70] text-[16px] mt-4 mb-[40px]'>Osteopathic treatment of babies is generally very effective and in most cases leads to very fast results.</div>

          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default FeaturesSlider