import HeroProductCard from "./HeroProductCard";
import HeroSwiper from "./swiper/HeroSwiper";

export default function Hero() {
  return (
    <div className="grid min-h-screen grid-cols-1 gap-4 bg-white xl:grid-cols-12">
      <div className="p-4 xl:col-span-8 xl:order-2">
        <HeroSwiper />
      </div>

      <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1 xl:col-span-4 xl:order-1">
        <div className="p-4 min-h-[250px] md:min-h-full">
          <HeroProductCard newProduct />
        </div>
        <div className="p-4 min-h-[250px] md:min-h-full">
          <HeroProductCard />
        </div>
      </div>
    </div>
  );
}
