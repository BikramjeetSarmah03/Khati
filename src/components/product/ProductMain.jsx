"use client";

import { useState } from "react";
import MainSwiper from "./MainSwiper";
import Info from "./Info";

export default function ProductMain({ product, size }) {
  const [activeImg, setActiveImg] = useState("");

  return (
    <div className="relative grid mt-4 gap-4 md:grid-cols-[1fr_350px] md:gap-8 xl:grid-cols-[1fr_1fr] min-h-[70vh]">
      <MainSwiper images={product.images} activeImg={activeImg} />

      <Info product={product} setActiveImg={setActiveImg} size={size} />
    </div>
  );
}
