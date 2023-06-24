"use client";

import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import CartDropdown from "./CartDropdown";

export default function Header() {
  const [activeScrollar, setActiveScrollbar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

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
    <>
      <header
        className={`flex items-center justify-between z-[999] bg-white px-4 transition-all duration-500 ${
          activeScrollar ? "py-4 sticky top-0 shadow-md" : "py-8"
        }`}
        id="#top">
        <div
          onClick={() => setOpenSidebar(!openSidebar)}
          className={`cursor-pointer menu ${openSidebar ? "opened" : ""}`}>
          <MenuIcon />
        </div>
        <div>
          <h1 className="font-mono text-3xl font-bold text-primary">Khati</h1>
        </div>
        <div className="relative group">
          <div className="relative">
            <ShoppingCartIcon className="w-8 h-8 cursor-pointer" />
            <span className="absolute right-0 text-white rounded-full -top-1 p-0.5 text-[10px] bg-secondary">
              10
            </span>
          </div>

          <div className="overflow-x-hidden">
            <CartDropdown />
          </div>
        </div>
      </header>

      <Sidebar open={openSidebar} />
    </>
  );
}
