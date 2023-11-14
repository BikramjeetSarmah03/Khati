"use client";

import Link from "next/link";
import { Heart, Search, ShoppingBag, UserCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 bg-white z-10 w-full p-4 transition-all duration-300",
        scrollActive ? "bg-gray-100 shadow-lg" : "py-8"
      )}>
      <div className="flex items-center justify-between xl:max-w-7xl 2xl:max-w-8xl  mx-auto">
        <Link
          href={"/"}
          className="text-primary font-semibold text-xl md:text-2xl">
          Khati
        </Link>

        <div className="hidden md:flex border rounded-md overflow-hidden h-full relative max-w-md w-full">
          <Input
            className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search..."
          />

          <div className="bg-primary/90 absolute text-white h-full top-0 right-0 flex items-center justify-center p-2 cursor-pointer hover:bg-primary transition-all">
            <Search />
          </div>
        </div>

        <div className="flex items-center gap-6 xl:gap-8">
          <Heart className="text-gray-600 cursor-pointer hover:text-primary/90 transition-all" />

          <ShoppingBag className="text-gray-600 cursor-pointer hover:text-primary/90 transition-all" />

          <UserCircle2 className="text-gray-600 cursor-pointer hover:text-primary/90 transition-all" />
        </div>
      </div>
    </header>
  );
}
