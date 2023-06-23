"use client";

import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeScrollar, setActiveScrollbar] = useState(false);

  const activeScrollbarFunction = () => {
    if (window.scrollY > 10) {
      setActiveScrollbar(true);
    } else {
      setActiveScrollbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", activeScrollbarFunction);

    return () => {
      window.removeEventListener("scroll", activeScrollbarFunction);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between z-10 bg-white px-4 transition-all duration-500 ${
        activeScrollar ? "py-4 sticky top-0 shadow-md" : "py-8"
      }`}
      id="#top">
      <div>
        <Bars3Icon className="w-8 h-8" />
      </div>
      <div>
        <h1 className="font-mono text-3xl font-bold text-primary">Khati</h1>
      </div>
      <div>
        <ShoppingCartIcon className="w-8 h-8" />
      </div>
    </header>
  );
}
