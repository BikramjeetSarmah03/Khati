import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

export default function CategoryCard({ header, products }) {
  return (
    <div className={`shadow border  h-full w-full overflow-hidden bg-pink-500`}>
      <div
        className={`flex items-center justify-between text-xl text-white bg-pink-700 p-4`}>
        <h1>{header}</h1>
        <BsArrowRightCircle size={24} />
      </div>

      <div className="grid h-full grid-cols-[repeat(3,1fr)]">
        {products.map((product, index) => (
          <div className="relative overflow-hidden cursor-pointer" key={index}>
            <Image
              src={product.image}
              alt="productImg"
              fill
              className="transition-all duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
