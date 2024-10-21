import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="h-full pl-1 md:basis-[50%] lg:basis-[33%] xl:basis-[25%]"
            >
              <div className="h-full p-1">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center h-full p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
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
