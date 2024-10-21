import { ShoppingCartIcon } from "lucide-react";

export const CartButton = () => {
  return (
    <button className="relative">
      <ShoppingCartIcon />

      <span className="absolute flex items-center justify-center text-xs rounded-full bg-primary size-4 p-0.5 -top-1 -right-1 align-top">
        1
      </span>
    </button>
  );
};
