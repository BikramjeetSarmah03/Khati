"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

import { useRef } from "react";

export default function HeroCarousel() {
  const swiperRef = useRef() as any;

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      loop={true}
      className="w-full h-full"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}>
      <button
        className="absolute left-0 z-10 cursor-pointer top-1/2"
        onClick={() => swiperRef.current.slidePrev()}>
        <div className="triangle left">
          <span>
            <ChevronLeftIcon className="w-5 h-5" />
          </span>
        </div>
      </button>

      <SwiperSlide className="hero">
        <div className="w-full h-full bg-blue-500">hey</div>
      </SwiperSlide>
      <SwiperSlide className="hero">
        <div className="w-full h-full bg-green-500">hey</div>
      </SwiperSlide>
      <SwiperSlide className="hero">
        <div className="w-full h-full bg-yellow-500">hey</div>
      </SwiperSlide>

      <button
        className="absolute right-0 z-10 cursor-pointer top-1/2"
        onClick={() => swiperRef.current.slideNext()}>
        <div className="triangle right">
          <span>
            <ChevronRightIcon className="w-5 h-5" />
          </span>
        </div>
      </button>
    </Swiper>
  );
}
