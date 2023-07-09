"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { userSwiperArray } from "@/utils/demoData/home";
import { useSession } from "next-auth/react";

import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

export default function UserSide() {
  const { data: session } = useSession();

  return (
    <div className="relative flex flex-col h-full overflow-hidden bg-[url('/assets/userheader.jpg')] bg-no-repeat">
      <div className="flex flex-col items-center flex-grow mt-16 space-y-4">
        {session ? (
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src={session.user.image}
              alt="userImg"
              height={70}
              width={70}
            />
            <span className="mt-4 text-2xl font-bold text-center">
              {session.user.name}
            </span>
          </div>
        ) : (
          <>
            <Image
              src={
                "https://res.cloudinary.com/bikramjeet/image/upload/v1688795542/Khati/avatars/guest-user_p5nqz0.png"
              }
              alt="userImg"
              height={70}
              width={70}
            />
            <div className="flex items-center">
              <button className="px-4 py-2 mx-2 text-white transition-all duration-300 lg:px-8 rounded-xl hover:bg-gray-100 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-500">
                Register
              </button>
              <button className="px-4 py-2 mx-2 transition-all duration-300 bg-gray-200 lg:px-8 rounded-xl hover:bg-gray-300">
                Login
              </button>
            </div>
          </>
        )}

        <ul className="flex items-center py-4 space-x-4 text-2xl lg:text-3xl">
          <li className="p-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200">
            <Link href="/profile">
              <IoSettingsOutline />
            </Link>
          </li>
          <li className="p-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200">
            <Link href="">
              <HiOutlineClipboardList />
            </Link>
          </li>
          <li className="p-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200">
            <Link href="">
              <AiOutlineMessage />
            </Link>
          </li>
          <li className="p-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200">
            <Link href="">
              <BsHeart />
            </Link>
          </li>
        </ul>

        <div className="flex-1 h-full">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            loop
            className="effectSwiper">
            {userSwiperArray.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full overflow-hidden border shadow rounded-xl">
                  <Image src={item.image} alt="userSwiperImg" fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="relative w-full rotate-180 h-28 ">
        <Image src={"/assets/userheader.jpg"} alt="userHeader" fill />
      </div>
    </div>
  );
}
