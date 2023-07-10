"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ProductSwiper({ products, header }) {
  return (
    <div className={"shadow mb-4"}>
      {header && (
        <h1 className="px-4 pt-4 text-2xl font-bold underline">{header}</h1>
      )}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
        }}
        className="productSwiper">
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-[400px] sm:min-h-[450px] w-[300px] shadow my-4">
              <div className="relative w-full h-[350px] cursor-pointer overflow-hidden">
                <Image
                  src={product.image}
                  alt="productImg"
                  fill
                  className="transition-all duration-500 hover:scale-105"
                />
                <Image src={product.image} alt="productImg" fill />
              </div>

              <div className="h-full p-2 sm:p-4">
                <h1 className="mb-2 font-serif text-gray-700 line-clamp-1">
                  {product.name}
                </h1>
                <h1 className="font-bold text-red-500">₹{product.price}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
