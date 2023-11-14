import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface HeroSwiperCardProps {
  title: string;
  img: string;
  category: string;
  description?: string;
  link?: string;
}

export default function HeroSwiperCard({
  title,
  img,
  category,
  description,
  link,
}: HeroSwiperCardProps) {
  return (
    <div className="relative w-full h-full">
      <Image src={img} alt={title} fill />

      <div className="relative z-20 flex flex-col items-end justify-center h-full w-full p-4 pr-8 md:pr-20 md:p-14 md:space-y-3">
        <h1 className="text-[15px] md:text-3xl font-serif xl:text-4xl 2xl:text-5xl capitalize">
          {title}
        </h1>

        <h2 className="font-semibold text-[20px] text-gray-800 md:text-2xl xl:text-3xl 2xl:text-4xl capitalize">
          {category}
        </h2>
        <p className="hidden text-xs md:block md:text-lg break-words w-1/2 xl:w-2/5 capitalize text-right">
          {description}
        </p>

        {link ? (
          <Link
            href={link}
            className={cn(
              buttonVariants({ variant: "shopNow", size: "sm" }),
              "py-2 px-4 mt-3 rounded-none text-sm font-medium"
            )}>
            Shop Now
          </Link>
        ) : null}
      </div>
    </div>
  );
}
