"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { flashDealsArray } from "@/utils/demoData/home";
import FlashProductCard from "./FlashProductCard";

export default function FlashDealsSwiper() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      className="flex items-center justify-center mt-4 flashDealsSwiper">
      {flashDealsArray.map((product, index) => (
        <SwiperSlide key={index}>
          <FlashProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
