import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";
import { Link } from "react-router-dom";
const TestimonailsSlider = () => {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
   
  return (
    <>
     
    <div className="relative">
    <Swiper
        slidesPerView={1}
        spaceBetween={55}
        rewind={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
  
            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        modules={[Navigation]}
        className="w-full"
        style={{paddingBottom: "120px", paddingLeft:"10px", paddingRight:"10px"}}
      >
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[10px] p-5 pb-7">
          <div className="flex items-center justify-center flex-col text-center">
            <img src="/images/profile.svg" alt="profile" />
          <div className='text-[#3D5C70] leading-relaxed text-[15px] mt-6 mb-[20px]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ullamcorper nisi, nibh urna amet iaculis tortor, egestas est. Leo volutpat, ut non duis tortor egestas. Vulputate imperdiet aliquam nullam faucibus elit neque, penatibus. Volutpat porttitor faucibus amet facilisi”</div>
          <div className="link-gradient font-[700] text-[19px]">Brooklyn Simmons</div>
          <div className='text-[#B0B0B0] font-[400] leading-relaxed text-[17px] mt-4'>Company XYZ</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[10px] p-5 pb-7">
          <div className="flex items-center justify-center flex-col text-center">
            <img src="/images/profile.svg" alt="profile" />
          <div className='text-[#3D5C70] leading-relaxed text-[15px] mt-6 mb-[20px]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ullamcorper nisi, nibh urna amet iaculis tortor, egestas est. Leo volutpat, ut non duis tortor egestas. Vulputate imperdiet aliquam nullam faucibus elit neque, penatibus. Volutpat porttitor faucibus amet facilisi”</div>
          <div className="link-gradient font-[700] text-[19px]">Brooklyn Simmons</div>
          <div className='text-[#B0B0B0] font-[400] leading-relaxed text-[17px] mt-4'>Company XYZ</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[10px] p-5 pb-7">
          <div className="flex items-center justify-center flex-col text-center">
            <img src="/images/profile.svg" alt="profile" />
          <div className='text-[#3D5C70] leading-relaxed text-[15px] mt-6 mb-[20px]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ullamcorper nisi, nibh urna amet iaculis tortor, egestas est. Leo volutpat, ut non duis tortor egestas. Vulputate imperdiet aliquam nullam faucibus elit neque, penatibus. Volutpat porttitor faucibus amet facilisi”</div>
          <div className="link-gradient font-[700] text-[19px]">Brooklyn Simmons</div>
          <div className='text-[#B0B0B0] font-[400] leading-relaxed text-[17px] mt-4'>Company XYZ</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={navigationPrevRef} className='w-fit cursor-pointer absolute top-[33%] -left-7 xl:-left-20' ><img src="/images/prev.svg" alt="prev"/></div>
      <div ref={navigationNextRef} className='w-fit cursor-pointer absolute top-[33%] -right-7 xl:-right-20'><img src="/images/next.svg" alt="next"/></div>
    </div>
    </>
  )
}

export default TestimonailsSlider