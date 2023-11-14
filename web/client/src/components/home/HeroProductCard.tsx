import Image from "next/image";

interface HeroProductCardProps {
newProduct?:boolean
}

export default function HeroProductCard({newProduct}:HeroProductCardProps) {
  return (
    <div className="relative h-full p-4 transition-all duration-300 bg-gray-100 hover:shadow-xl">
      <Image
        src={"https://htmldemo.net/hurst-v1/hurst/img/banner/1.jpg"}
        alt="banner-1"
        fill
      />

      <div className="absolute top-0 left-0 flex items-center justify-between w-full p-8">
        <div>{newProduct ? "New": null}</div>
        <div>$ 50</div>
      </div>
      <div>Bottom</div>
    </div>
  );
}


