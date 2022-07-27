import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";
import { Link } from "react-router-dom";
const FeaturesSlider = () => {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
   
  return (
    <>
     
    <div className="relative">
    <Swiper
    breakpoints={{
      0: {
        // width: 0,
        slidesPerView: 1,
      },
      682: {
        // width: 576,
        slidesPerView: 2,
      },
      952: {
        // width: 952,
        slidesPerView: 3,
      },
    }}
        slidesPerView={3}
        spaceBetween={20}
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
        style={{paddingBottom: "120px"}}
      >
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[4px] p-4 pb-7">
          <img src="/images/heart.svg" alt="heart"  className="mb-3"/>
          <div className="pl-3">
          <div className="font-[600] text-[#3D5C70] text-[20px] font-[Ubuntu] mb-2">Babies</div>
          <div className='text-[#3D5C70] text-[15px] mt-2 mb-[20px]'>Osteopathic treatment of babies is generally very effective and in most cases leads to very fast results.</div>
          <Link to="/#"><span className="link-gradient font-[600] text-[17px] underline border-b-2 border-[#d1589b]">Learn More</span></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[4px] p-4 pb-7">
          <img src="/images/heart.svg" alt="heart"  className="mb-3"/>
          <div className="pl-3">
          <div className="font-[600] text-[#3D5C70] text-[20px] font-[Ubuntu] mb-2">Children</div>
          <div className='text-[#3D5C70] text-[15px] mt-2 mb-[20px]'>Osteopathic treatment of babies is generally very effective and in most cases leads to very fast results.</div>
          <Link to="/#"><span className="link-gradient font-[600] text-[17px] underline border-b-2 border-[#d1589b]">Learn More</span></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[4px] p-4 pb-7">
          <img src="/images/heart.svg" alt="heart"  className="mb-3"/>
          <div className="pl-3">
          <div className="font-[600] text-[#3D5C70] text-[20px] font-[Ubuntu] mb-2">Adult</div>
          <div className='text-[#3D5C70] text-[15px] mt-2 mb-[20px]'>Osteopathic treatment of babies is generally very effective and in most cases leads to very fast results.</div>
          <Link to="/#"><span className="link-gradient font-[600] text-[17px] underline border-b-2 border-[#d1589b]">Learn More</span></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[4px] p-4 pb-7">
          <img src="/images/heart.svg" alt="heart"  className="mb-3"/>
          <div className="pl-3">
          <div className="font-[600] text-[#3D5C70] text-[20px] font-[Ubuntu] mb-2">Babies</div>
          <div className='text-[#3D5C70] text-[15px] mt-2 mb-[20px]'>Osteopathic treatment of babies is generally very effective and in most cases leads to very fast results.</div>
          <Link to="/#"><span className="link-gradient font-[600] text-[17px] underline border-b-2 border-[#d1589b]">Learn More</span></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[4px] p-4 pb-7">
          <img src="/images/heart.svg" alt="heart"  className="mb-3"/>
          <div className="pl-3">
          <div className="font-[600] text-[#3D5C70] text-[20px] font-[Ubuntu] mb-2">Children</div>
          <div className='text-[#3D5C70] text-[15px] mt-2 mb-[20px]'>Osteopathic treatment of babies is generally very effective and in most cases leads to very fast results.</div>
          <Link to="/#"><span className="link-gradient font-[600] text-[17px] underline border-b-2 border-[#d1589b]">Learn More</span></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-box-shadow cursor-grab active:cursor-grabbing bg-white rounded-[4px] p-4 pb-7">
          <img src="/images/heart.svg" alt="heart"  className="mb-3"/>
          <div className="pl-3">
          <div className="font-[600] text-[#3D5C70] text-[20px] font-[Ubuntu] mb-2">Adult</div>
          <div className='text-[#3D5C70] text-[15px] mt-2 mb-[20px]'>Osteopathic treatment of babies is generally very effective and in most cases leads to very fast results.</div>
          <Link to="/#"><span className="link-gradient font-[600] text-[17px] underline border-b-2 border-[#d1589b]">Learn More</span></Link>
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={navigationPrevRef} className='w-fit cursor-pointer absolute top-[33%] -left-10' ><img src="/images/prev.svg" alt="prev"/></div>
      <div ref={navigationNextRef} className='w-fit cursor-pointer absolute top-[33%] -right-10'><img src="/images/next.svg" alt="next"/></div>
    </div>
    </>
  )
}

export default FeaturesSlider