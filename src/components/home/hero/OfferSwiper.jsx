"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import { Pagination, Navigation } from "swiper/modules";
import { offersAarray } from "@/utils/demoData/home";

export default function OfferSwiper() {
  return (
    <div className="flex w-full h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        className="offerSwiper">
        {offersAarray.map((offer, index) => (
          <SwiperSlide className="relative" key={index}>
            <div className="relative w-full h-full">
              <Link href={""}>
                <Image src={offer.image} alt={"offer"} fill />
              </Link>
            </div>

            <div className="absolute right-0 z-10 p-2 bg-red-400 rounded-full top-2">
              {offer.discount} %
            </div>
            <h1 className="absolute left-0 right-0 z-10 w-20 px-4 py-2 mx-auto text-center bg-orange-400 bottom-7 rounded-2xl">
              {offer.price}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
