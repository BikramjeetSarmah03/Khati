import { ProductsSwiper } from "./products-swiper";

export const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-70px)] transition-all duration-300 flex items-center gap-4 flex-col lg:flex-row w-full">
      <div className="lg:order-2 w-full lg:w-[200%] 2xl:w-[300%] lg:grid h-1/2 md:h-full transition-all duration-300">
        <ProductsSwiper />
      </div>
      <div className="grid grid-cols-1 gap-4 transition-all duration-300 size-full md:grid-cols-2 lg:grid-cols-1">
        <div className="w-full bg-red-500">Second</div>
        <div className="bg-red-500">Third</div>
      </div>
    </div>
  );
};
