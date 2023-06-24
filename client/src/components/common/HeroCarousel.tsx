"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, A11y } from "swiper";
import { useRef } from "react";

export default function HeroCarousel() {
  const swiperRef = useRef() as any;

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay, A11y]}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      autoplay={false}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="mySwiper"
      loop={true}
      slidesPerView={1}>
      <SwiperSlide>
        <div className="h-40 bg-red-500">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-40 bg-green-500">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-40 bg-yellow-500">Slide 3</div>
      </SwiperSlide>
      <button
        className="mx-4 cursor-pointer"
        onClick={() => swiperRef.current.slidePrev()}>
        Prev
      </button>
      <button
        className="mx-4 cursor-pointer"
        onClick={() => swiperRef.current.slideNext()}>
        Next
      </button>
    </Swiper>
  );
}
