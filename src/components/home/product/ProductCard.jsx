"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductSwiper from "./ProductSwiper";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  const [prices, setPrices] = useState(
    product.subProducts[active]?.sizes.map((s) => s.price).sort((a, b) => a - b)
  );
  const [styles, setStyles] = useState(product.subProducts.map((p) => p.color));

  useEffect(() => {
    setImages(product.subProducts[active]?.images);
    setPrices(
      product.subProducts[active]?.sizes
        .map((s) => s.price)
        .sort((a, b) => a - b)
    );
  }, [active, product]);

  return (
    <div className="relative w-[320px] h-[500px] border p-2 overflow-hidden mx-auto">
      <div className="container">
        <Link href={`/product/${product.slug}?style=${active}`} target="_blank">
          <ProductSwiper images={images} />
        </Link>

        {product.subProducts[active].discount ? (
          <div className="absolute -top-2.5 -right-2.5 z-[1] bg-yellow-500 text-[#333] w-[50px] h-[50px] rounded-full grid place-items-center text-sm font-semibold">
            -{product.subProducts[active].discount}%
          </div>
        ) : (
          ""
        )}

        <div className="infos">
          <h1 className="text-lg font-bold text-[#333] mt-2">
            {product.name.length > 45
              ? `${product.name.substring(0, 45)}...`
              : product.name}
          </h1>

          <div className="flex items-center justify-between w-full mt-2">
            <span className="text-xl font-bold text-red-500">
              {prices.length === 1
                ? `INR ${prices[0]}`
                : `INR ${prices[0]}-${prices[prices.length - 1]}`}
            </span>

            <div className="flex items-center space-x-2">
              {styles &&
                styles.map((style, index) =>
                  style.image ? (
                    <Image
                      src={style.image}
                      className={index === active && "outline outline-black"}
                      onMouseOver={() => {
                        setImages(product.subProducts[index].images);
                        setActive(index);
                      }}
                      alt="styleImg"
                      style={{ borderRadius: "50%", cursor: "pointer" }}
                      height={20}
                      width={20}
                    />
                  ) : (
                    <span
                      style={{ backgroundColor: `${style.color}` }}
                      onMouseOver={() => {
                        setImages(product.subProducts[index].images);
                        setActive(index);
                      }}></span>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
