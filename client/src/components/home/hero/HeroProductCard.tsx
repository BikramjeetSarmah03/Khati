import Image from "next/image";
import Link from "next/link";

type HeroProduct = {};

export default function HeroProductCard({}: HeroProduct) {
  const sale = true;
  const newProduct = false;

  return (
    <div className="relative w-full h-full transition-all duration-500 bg-gray-200 cursor-pointer hover:shadow-2xl">
      <div className="relative z-50">
        {newProduct && (
          <div className="absolute px-2 py-1 text-white rounded-md bg-primary top-5 left-5">
            New
          </div>
        )}
        {sale && (
          <div className="absolute px-2 py-1 text-white rounded-md bg-secondary top-5 left-5">
            Sale
          </div>
        )}

        <h2 className="absolute px-2 py-1 text-xl font-bold text-black rounded-md top-5 right-5">
          $49.99
        </h2>
      </div>

      <Link
        href={"/product/123"}
        className="relative w-full h-full overflow-hidden">
        <Image
          src="/assets/product.webp"
          alt="productImg"
          fill
          className="z-0 h-auto max-w-full bg-cover"
        />
      </Link>

      <div className="absolute bottom-0 flex justify-between w-full p-4">
        <div>
          <h1 className="font-mono text-xl font-bold">Product Name</h1>
          <h2 className="text-gray-500">Category</h2>
        </div>

        <button className="px-4 text-lg transition-all duration-500 border border-gray-500 hover:bg-primary hover:text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
}
