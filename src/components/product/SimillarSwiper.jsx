"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { simillar_products } from "@/utils/demoData/products";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";

export default function SimillarSwiper() {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold mb-2">Simillar Products</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={3}
        navigation={true}
        className="swiper simillar_swiper products__swiper max-w-[650px]"
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 4,
          },
          640: {
            width: 640,
            slidesPerView: 5,
          },
        }}>
        {simillar_products.map((p, index) => (
          <SwiperSlide key={index}>
            <Link href="">
              <div className="relative  h-[160px] w-[120px]">
                <Image src={p} alt="similarImg" fill />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
