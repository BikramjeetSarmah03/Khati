"use client";

import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ProductCard } from "@/components/product/product-card";

import products from "@/demo/products.json";

export const FeaturedSwiper = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="min-h-[30vh] flex">
      <button
        onClick={() => api?.scrollPrev()}
        className="p-2 px-3 my-auto text-sm font-semibold uppercase transition-all duration-300 border h-fit hover:bg-primary"
      >
        p<br />r<br />e<br />v
      </button>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full "
        setApi={setApi}
      >
        <CarouselContent className="h-full -ml-1" wrapperClassName="h-full">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="h-full pl-1 md:basis-[50%] lg:basis-[33%] xl:basis-[25%]"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <button
        onClick={() => api?.scrollNext()}
        className="p-2 px-3 my-auto text-sm font-semibold uppercase transition-all duration-300 border h-fit hover:bg-primary"
      >
        N <br />e <br />x <br />t
      </button>
    </div>
  );
};
