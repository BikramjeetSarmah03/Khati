"use client";

import { useState } from "react";
import Image from "next/image";

export default function MainSwiper({ images, activeImg }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-9 grid-rows-6 gap-4 min-h-[500px] max-h-[700px] max-w-[calc(100vw-30px)]">
      <div className="row-span-1 row-start-6 sm:row-span-full col-span-full sm:col-span-2 lg:row-span-full lg:col-span-2 md:col-span-9 md:row-start-6">
        <div className="flex h-16 min-h-full gap-2 overflow-x-auto sm:flex-col md:flex-row lg:flex-col lg:pt-4 ">
          {images.map((img, i) => (
            <div
              className="flex items-center justify-center w-full"
              key={i}
              onMouseOver={() => setActive(i)}>
              <div
                className={`relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[100px] md:h-[100px] cursor-pointer ${
                  i == active && "outline outline-black outline-offset-[3px]"
                }`}>
                <Image src={img.url} alt="ProductImg" key={i} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row-span-5 col-span-full sm:row-span-full sm:col-span-7 lg:row-span-full lg:col-span-7 md:col-span-9 md:row-span-5">
        <div className="relative w-full h-full">
          <Image src={activeImg || images[active].url} alt="ProductImg" fill />
        </div>
      </div>
    </div>
  );
}
