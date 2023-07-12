import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

export default function CategoryCard({ header, products }) {
  const colors = [
    "#ef4444",
    "#f97316",
    "#d97706",
    "#f59e0b",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
  ];
  const background = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`shadow border lg:h-[500px] w-full overflow-hidden`}
      style={{ backgroundColor: background }}>
      <div
        className={`flex items-center justify-between text-xl text-white p-4`}>
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
