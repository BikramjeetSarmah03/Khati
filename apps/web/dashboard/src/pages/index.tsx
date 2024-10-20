import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/sections/home/hero-section";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <HeroSection />
    </div>
  );
}
