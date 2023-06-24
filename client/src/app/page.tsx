import Heading from "@/components/common/Heading";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import HeroCarousel from "@/components/home/hero/HeroCarousel";
import HeroProductCard from "@/components/home/hero/HeroProductCard";
import HomeProductCard from "@/components/home/HomeProductCard";

export default function Home() {
  return (
    <>
      <section className="grid xl:grid-cols-12 px-3.5 md:px-14 xl:px-28 min-h-[50rem] xl:gap-12">
        <div className="relative flex flex-col items-center order-last md:flex-row xl:flex-col xl:gap-12 mt-7 xl:mt-0 xl:col-span-4 xl:order-first gap-7">
          <HeroProductCard />
          <HeroProductCard />
        </div>
        <div className="xl:col-span-8">
          <HeroCarousel />
        </div>
      </section>

      <section className="mt-16 min-h-[20rem] container mx-auto px-4 sm:px-0">
        <Heading title="Featured Products" center />

        <div className="relative mt-8 h-96">
          <FeaturedCarousel />
        </div>
      </section>

      <section className="mt-16 min-h-[20rem] container mx-auto px-4 sm:px-0">
        <Heading title={"Purchase Online on Khati"} center />

        <section className="mt-8">
          <ul className="flex items-center justify-center gap-7">
            <li className="category-header active">New Arrivals</li>
            <li className="category-header">Best Seller</li>
            <li className="category-header">Most View</li>
            <li className="category-header">Discounts</li>
          </ul>

          <div className="grid grid-cols-12 gap-4 mt-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <HomeProductCard key={index} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
