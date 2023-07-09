import Link from "next/link";

// Components Import
import CategoryMenu from "@/components/home/CategoryMenu";
import HeroSwiper from "@/components/home/HeroSwiper";
import OfferSwiper from "@/components/home/OfferSwiper";
import UserSide from "@/components/home/UserSide";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-4 p-4 max-w-[1700px] mx-auto min-h-[80vh] space-y-2 md:space-y-0 md:grid md:grid-cols-5 md:grid-rows-6">
        <div className="h-20 md:h-[89vh] md:row-span-7 overflow-y-auto border shadow rounded ">
          <CategoryMenu />
        </div>
        <div className="items-center hidden overflow-x-auto overflow-y-hidden text-2xl border rounded shadow lg:col-span-4 lg:flex lg:space-x-4">
          <Link
            href={"/"}
            className="flex items-center justify-center w-full h-full p-4 hover:shadow-inner hover:bg-gray-50">
            Shop
          </Link>
          <Link
            href={"/"}
            className="flex items-center justify-center w-full h-full p-4 hover:shadow-inner hover:bg-gray-50">
            Electronics
          </Link>
          <Link
            href={"/"}
            className="flex items-center justify-center w-full h-full p-4 hover:shadow-inner hover:bg-gray-50">
            Watches
          </Link>
        </div>
        <div className="h-[400px] md:h-full overflow-hidden border rounded shadow md:col-span-4 md:row-span-3 md:col-start-2 lg:row-start-2 xl:col-span-3 xl:row-span-3">
          <HeroSwiper />
        </div>
        <div className="h-[300px] md:h-full overflow-hidden border rounded shadow md:block md:col-span-4 md:row-span-3 md:col-start-2 md:row-start-4 lg:row-start-5 xl:col-span-3 xl:row-span-2 ">
          <OfferSwiper />
        </div>
        <div className="hidden border rounded shadow xl:block xl:row-span-5 xl:col-start-5 xl:row-start-2">
          <UserSide />
        </div>
      </div>
    </main>
  );
}
