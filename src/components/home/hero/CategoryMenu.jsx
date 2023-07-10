import { menuArray } from "@/utils/demoData/home";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";

export default function CategoryMenu() {
  return (
    <div>
      <h1 className="sticky top-0 z-10 flex items-center p-2 space-x-4 text-sm border-b md:p-4 bg-gray-50 md:text-base">
        <BiCategory className="text-xl md:text-2xl" />
        <b className="text-sm lg:text-base">Categories</b>
      </h1>

      <ul className="flex flex-row pt-2 overflow-x-auto overflow-y-hidden md:flex-col marker:overflow-x-hidden md:overflow-y-auto">
        {menuArray.map((item, index) => (
          <li
            className="text-xs md:text-base hover:bg-gray-50 hover:shadow-inner"
            key={index}>
            <Link
              href={item.link}
              className="flex items-center p-4 space-x-2 md:pl-2 lg:pl-4">
              <span className="text-lg md:text-2xl" title={item.name}>
                {item.icon}
              </span>
              <span className="hidden text-[10px] md:text-base md:inline-block">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
