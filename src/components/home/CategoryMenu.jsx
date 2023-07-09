import { menuArray } from "@/utils/demoData/home";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";

export default function CategoryMenu() {
  return (
    <div>
      <ul>
        <li className="sticky top-0 flex items-center p-4 space-x-4 border-b bg-gray-50 z-10s">
          <BiCategory size={24} />
          <b>Categories</b>
        </li>

        <div>
          {menuArray.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center p-4 space-x-2 hover:bg-gray-50 hover:shadow-inner">
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
