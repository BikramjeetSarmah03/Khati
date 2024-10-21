import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/sections/hero/hero-section";
import { FeaturedSwiper } from "@/components/sections/featured/featured-swiper";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
    </div>
  );
}
