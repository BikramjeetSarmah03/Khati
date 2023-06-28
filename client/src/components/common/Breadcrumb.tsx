import Image from "next/image";

export default function Breadcrumb() {
  const imageUrl = "/assets/breadcrumb.webp";

  return (
    <div
      className={`h-[300px] relative before:bg-[rgba(0,0,0,0.3)] before:z-10 before:content-[''] before:h-full before:left-0 before:absolute before:top-0 before:w-full`}>
      <Image src={imageUrl} alt="breadcrumbImg" fill />

      <div className="container flex flex-col justify-center h-full mx-auto md:max-w-5xl">
        <h1 className="z-10 flex items-center justify-center flex-grow text-5xl font-bold text-white">
          Single Product
        </h1>
        <ul className="z-10 flex pl-4 space-x-4 text-2xl font-bold text-white lg:pl-0">
          <li>Home</li>
          <li>/</li>
          <li className="font-mono">Single product </li>
        </ul>
        I
      </div>
    </div>
  );
}
