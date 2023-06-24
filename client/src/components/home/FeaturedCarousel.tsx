"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

import { useRef } from "react";
import HomeProductCard from "./HomeProductCard";

export default function FeaturedCarousel() {
  const swiperRef = useRef() as any;

  return (
    <Swiper
      spaceBetween={20}
      modules={[Navigation]}
      navigation={true}
      loop={true}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        780: {
          slidesPerView: 2,
        },
        990: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="flex h-full"
      onSwiper={(swiper) => (swiperRef.current = swiper)}>
      {[1, 2, 3, 4, 5].map((index) => (
        <SwiperSlide className="max-h-96 w-[400px]" key={index}>
          <HomeProductCard />
        </SwiperSlide>
      ))}

      <button
        className="absolute left-0 z-10 cursor-pointer top-[40%] bg-white border p-2 text-primary text-sm font-serif hover:bg-primary hover:text-white transition-all duration-500"
        onClick={() => swiperRef.current.slidePrev()}>
        P <br /> R <br /> E <br />V
      </button>
      <button
        className="absolute right-0 z-10 cursor-pointer top-[40%] bg-white border p-2 text-primary text-sm font-serif hover:bg-primary hover:text-white transition-all duration-500"
        onClick={() => swiperRef.current.slideNext()}>
        N <br />E <br />X <br />T
      </button>
    </Swiper>
  );
}
