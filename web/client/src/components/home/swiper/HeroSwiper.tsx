"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { HeroProducts } from "@/lib/mockData";

import HeroSwiperCard from "./HeroSwiperCard";

export default function HeroSwiper() {
  return (
    <Swiper
      className="w-full h-full heroSwiper"
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 1500,
      }}
      loop={true}>
      {HeroProducts.map((item, index) => (
        <SwiperSlide key={index}>
          <HeroSwiperCard
            title={item.title}
            img={item.img}
            category={item.category}
            description={item.description}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
