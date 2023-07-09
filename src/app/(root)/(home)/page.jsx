import CategoryMenu from "@/components/home/CategoryMenu";
import HeroSwiper from "@/components/home/HeroSwiper";
import OfferSwiper from "@/components/home/OfferSwiper";
import UserSide from "@/components/home/UserSide";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-12 grid-rows-7 gap-4 p-4 max-w-[1700px] mx-auto min-h-[80vh]">
        <div className="col-span-3 border shadow row-span-7 rounded-xl max-h-[80vh] overflow-y-auto">
          <CategoryMenu />
        </div>
        <div className="col-span-9 col-start-4 border shadow rounded-xl">
          header
        </div>
        <div className="col-span-3 col-start-10 row-span-6 row-start-2 border shadow rounded-xl">
          <UserSide />
        </div>
        <div className="col-span-6 col-start-4 row-span-3 row-start-2 border shadow rounded-xl">
          <HeroSwiper />
        </div>
        <div className="col-span-6 col-start-4 row-span-3 row-start-5 border shadow rounded-xl">
          <OfferSwiper />
        </div>
      </div>
    </main>
  );
}
