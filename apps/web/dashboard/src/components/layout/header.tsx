import { useState } from "react";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { AuthButtons } from "@/components/auth/auth-buttons";
import { CartButton } from "@/components/cart/cart-button";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <MenuIcon />
        </button>

        <h1 className="font-serif font-semibold">Khati</h1>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li>Home</li>
            <li>Products</li>
            <li>Handmade</li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <CartButton />
          <AuthButtons />
        </div>
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={"left"} className="flex flex-col h-full">
          <SheetHeader>
            <SheetTitle>
              <h1 className="font-serif font-semibold">Khati</h1>
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-4 grow">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Products</li>
            <li className="cursor-pointer hover:underline">Handmade</li>
          </ul>

          <div className="flex justify-between gap-4">
            <Button className="w-full">Login</Button>
            <Button className="w-full" variant={"outline"}>
              Register
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
