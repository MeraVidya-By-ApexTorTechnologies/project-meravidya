import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const SwiperTest = () => {
  return (
    <div>
        <p className="text-2xl font-semibold">swiper</p>
        <Swiper 
         pagination={{
          dynamicBullets: true,
          clickable: true
        }}
         modules={[Pagination, Navigation, Autoplay]}
         centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
         className="mySwiper">
            <SwiperSlide className='w-[30%] h-[10vh] bg-white'>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SwiperTest