export default function Home() {
  return (
    <>
      <section className="grid xl:grid-cols-12 px-3.5 md:px-14 xl:px-28 min-h-[50rem] xl:gap-12">
        <div className="flex flex-col items-center order-last md:flex-row xl:flex-col xl:gap-12 mt-7 xl:mt-0 xl:col-span-4 xl:order-first gap-7">
          <div className="w-full h-full transition-all duration-500 bg-red-400 cursor-pointer hover:shadow-2xl"></div>
          <div className="w-full h-full transition-all duration-500 bg-red-400 cursor-pointer hover:shadow-2xl"></div>
        </div>
        <div className="bg-red-400 xl:col-span-8"></div>
      </section>
    </>
  );
}
