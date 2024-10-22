import { ProductCard } from "@/components/product/product-card";
import { FeaturedSwiper } from "@/components/sections/featured/featured-swiper";
import { HeroSection } from "@/components/sections/hero/hero-section";

import products from "@/demo/products.json";

export default function Home() {
  return (
    <div className="h-full p-2 space-y-20">
      <HeroSection />

      <section className="mx-4 md:mx-8 lg:mx-auto max-w-7xl">
        <div className="space-y-8">
          <h1 className="flex flex-col items-center gap-4 text-4xl font-bold">
            <span>Featured Products</span>
            <hr className="w-20 h-0.5 bg-primary" />
          </h1>
          <FeaturedSwiper />
        </div>
      </section>

      <section className="mx-4 md:mx-8 lg:mx-auto max-w-7xl">
        <div className="space-y-8">
          <h1 className="flex flex-col items-center gap-4 text-4xl font-bold">
            <span>Purchase Online on Hurst</span>
            <hr className="w-20 h-0.5 bg-primary" />
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
