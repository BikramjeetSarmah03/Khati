"use client";

import {
  HeartIcon,
  RefreshCwIcon,
  ShoppingBasketIcon,
  ZoomInIcon,
} from "lucide-react";

import { StarRating } from "@/components/ui/rating";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col h-full gap-4 p-4 transition-shadow duration-300 border rounded-md group hover:shadow-2xl">
      <div className="relative p-4 overflow-hidden grow bg-muted">
        <div className="relative h-60"></div>

        <div className="absolute w-[calc(100%-2rem)] transition-all duration-300 -bottom-10 group-hover:bottom-4">
          <div className="flex justify-between px-8 py-2 pr-4 bg-white border divide-x-2">
            <button className="w-full">
              <HeartIcon className="h-4" />
            </button>

            <button className="w-full pl-8">
              <ZoomInIcon className="h-4" />
            </button>

            <button className="w-full pl-8">
              <RefreshCwIcon className="h-4" />
            </button>

            <button className="w-full pl-8">
              <ShoppingBasketIcon className="h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-20">
          <h1 className="text-xl font-semibold truncate">{product.title}</h1>
          <p className="capitalize">
            {product.category.split(" ")[0].replace("'", "")}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">₹ {product.price}</h1>
          <StarRating
            iconProps={{
              className: "size-4",
            }}
            value={product.rating.rate}
            setValue={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
