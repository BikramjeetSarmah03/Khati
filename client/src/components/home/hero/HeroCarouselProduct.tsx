import Image from "next/image";

type CarouselProductProps = {};

export default function HeroCarouselProduct({}: CarouselProductProps) {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/assets/carouseImg.webp"
          alt="productImg"
          fill
          className="z-0 h-auto max-w-full bg-cover"
        />
      </div>

      <div className="absolute right-0 z-50 w-1/2 h-full top-[25%] xl:top-1/2 space-y-4">
        <h2 className="text-3xl uppercase text-black-light">Welcome to our</h2>
        <h1 className="text-4xl font-bold uppercase text-black-dark">
          Furniture
        </h1>
        <p className="pr-8 break-words text-black-light">
          Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, nulla? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Hic, optio.
        </p>

        <button className="px-4 py-2 transition-all duration-500 border border-gray-400 hover:bg-primary hover:text-white">
          Buy Now
        </button>
      </div>
    </>
  );
}
