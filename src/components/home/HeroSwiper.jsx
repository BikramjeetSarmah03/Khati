"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HeroSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="heroSwiper">
      {[...Array(5).keys()].map((index) => (
        <SwiperSlide key={index}>
          <div className="relative z-20 h-full">
            <Image
              src={
                "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="swiperImg"
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
