import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export const ProductsSwiper = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        loop: true,
      }}
      setApi={setApi}
      className="relative overflow-x-hidden size-full"
    >
      <div className="absolute inset-y-0 z-10 flex items-center -left-1 text-muted-foreground">
        <div className="relative">
          <button
            onClick={() => api?.scrollPrev()}
            className="relative flex items-center justify-center w-12 h-12 -ml-1.5"
          >
            <span className="absolute w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-l-[30px] border-l-secondary"></span>

            <ChevronLeftIcon className="relative z-10 -ml-2" />
          </button>
        </div>
      </div>

      <CarouselContent
        wrapperClassName="size-full"
        className="h-full w-[100vw]"
      >
        <CarouselItem>
          <div className="bg-red-500 size-full">hey</div>
        </CarouselItem>
        <CarouselItem>
          <div className="bg-green-500 size-full">hey 2</div>
        </CarouselItem>
        <CarouselItem>
          <div className="bg-blue-500 size-full">hey 3</div>
        </CarouselItem>
      </CarouselContent>

      <div className="absolute inset-y-0 z-10 flex items-center -right-1 text-muted-foreground">
        <div className="relative">
          <button
            onClick={() => api?.scrollNext()}
            className="relative flex items-center justify-center w-12 h-12 -mr-1.5"
          >
            <span className="absolute w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[30px] border-r-secondary"></span>

            <ChevronRightIcon className="relative z-10 -mr-2" />
          </button>
        </div>
      </div>
    </Carousel>
  );
};
