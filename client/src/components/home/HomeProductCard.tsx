import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type ProductProps = {};

export default function HomeProductCard({}: ProductProps) {
  const sale = true;
  const newProduct = false;

  return (
    <div className="w-[300px] sm:w-[325px] md:w-[312px] xl:w-[297px] p-4 space-y-4 col-span-12 sm:col-span-6 xl:col-span-3 h-full pt-8 transition-all duration-500 lg:col-span-4 bg-white cursor-pointer hover:shadow-[0_5px_10px_5px_rgba(0,0,0,0.05)] group overflow-hidden">
      <div className="relative overflow-hidden">
        {newProduct && (
          <div className="absolute px-2 py-1 text-white rounded-md top-5 left-5 bg-primary">
            New
          </div>
        )}
        {sale && (
          <div className="absolute px-2 py-1 text-white rounded-md top-5 left-5 bg-secondary">
            Sale
          </div>
        )}

        <div className="w-full overflow-hidden">
          <Image
            width={100}
            height={100}
            src="/assets/product.webp"
            alt="productImg"
            className="w-full h-full bg-cover"
          />
        </div>

        <div className="absolute bottom-[-60px] invisible transition-all duration-500 bg-white group-hover:visible group-hover:bottom-0 w-[calc(100%-40px)] p-2 m-4 flex items-center justify-between px-4 text-sm xl:text-xl">
          <HeartIcon className="w-6 h-6 transition-all duration-300 cursor-pointer hover:text-primary" />
          <div className="w-px h-4 bg-black"></div>
          <MagnifyingGlassIcon className="w-6 h-6 transition-all duration-300 cursor-pointer hover:text-primary" />
          <div className="w-px h-4 bg-black"></div>
          <ShoppingBagIcon className="w-6 h-6 transition-all duration-300 cursor-pointer hover:text-primary" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-mono text-lg font-bold uppercase">
            Dummy Product Name
          </h1>
          <p className="text-gray-400">Furniture</p>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-secondary">$ 56.20</h1>
          <p>Stars</p>
        </div>
      </div>
    </div>
  );
}
