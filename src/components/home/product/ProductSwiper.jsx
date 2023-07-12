"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductSwiper({ images }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);

  return (
    <div
      className="relative bg-white cursor-pointer"
      onMouseEnter={() => {
        swiperRef.current.swiper.autoplay.stop();
        swiperRef.current.swiper.slideTo(0);
      }}>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 500, stopOnLastSlide: false }}
        speed={500}
        modules={[Autoplay]}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[390px] w-[390px] rounded-xl">
              <Image src={img.url} alt="productImg" fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
