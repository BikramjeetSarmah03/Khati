import Image from "next/image";
import { BsLightningFill } from "react-icons/bs";

export default function FlashProductCard({ product }) {
  return (
    <div className="min-h-[400px] sm:min-h-[450px] w-[300px] shadow my-4">
      <div className="relative w-full h-[300px] sm:h-[350px] cursor-pointer overflow-hidden">
        <Image
          src={product.image}
          alt="productImg"
          fill
          className="transition-all duration-500 hover:scale-105"
        />

        <div className="absolute top-0 left-0 p-4 space-y-2 bg-yellow-400">
          <BsLightningFill size={24} />
          <span>{product.discount}%</span>
        </div>
      </div>

      <div className="p-2 bg-gray-50">
        <h1 className="flex flex-wrap items-center py-4 ">
          <span className="mr-2 text-xl font-bold text-orange-400">
            ₹{Math.floor(product.price - product.price / product.discount)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{product.price}
          </span>
          <span className="ml-2">{product.discount}%</span>
        </h1>

        <div className="relative h-4 bg-gray-200">
          <div
            className="absolute top-0 left-0 h-4 bg-yellow-400 rounded-r-full"
            style={{ width: "35%" }}></div>
        </div>
        <h3 className="mt-2 space-x-2 text-sm text-gray-400">
          <span>{"35%"}</span>
          <span className="space-x-2 text-xl font-bold text-black">
            <span>{product.sold}</span>
            <span className="font-serif">Sold</span>
          </span>
        </h3>
      </div>
    </div>
  );
}
