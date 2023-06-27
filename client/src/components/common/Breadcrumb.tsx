export default function Breadcrumb() {
  return (
    <div
      className={`h-[300px] relative before:bg-[rgba(0,0,0,0.3)] before:content-[''] before:h-full before:left-0 before:absolute before:top-0 before:w-full`}>
      <div className="container flex flex-col justify-center h-full mx-auto md:max-w-5xl">
        <h1 className="z-10 flex items-center justify-center flex-grow text-5xl font-bold text-white">
          Single Product
        </h1>

        <ul className="flex pb-8">
          <li>Home /</li>
          <li>Single product </li>
        </ul>
      </div>
    </div>
  );
}
