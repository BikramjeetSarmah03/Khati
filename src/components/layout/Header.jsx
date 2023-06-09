"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch, BiHeart, BiUser } from "react-icons/bi";
import { FiChevronDown, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <nav className="flex items-center justify-between p-4 space-x-4 shadow-xl lg:px-32">
        <h1 className="text-2xl font-bold text-orange-400 md:text-3xl">
          Khati
        </h1>
        <div className="flex items-center w-full max-w-[20rem] pl-4 overflow-hidden border md:max-w-lg lg:max-w-xl rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 pr-4 focus:outline-none"
          />
          <div className="p-4 bg-yellow-400">
            <BiSearch />
          </div>
        </div>
        <div>
          <FiShoppingCart size={24} />
        </div>
      </nav>

      <nav className="p-2 text-[10px] bg-gray-50 md:text-base">
        <ul className="flex items-center justify-center">
          <li className="px-4 border-r border-gray-400">INR</li>
          <li className="hidden px-4 border-r border-gray-400 md:block">
            Buyer Protection
          </li>
          <li className="hidden px-4 border-r border-gray-400 md:block">
            Customer Service
          </li>
          <li className="hidden px-4 border-r border-gray-400 md:block">
            Help
          </li>
          <li className="flex items-center px-4 border-r border-gray-400 ">
            <Link
              href={"/wishlist"}
              className="flex items-center w-full h-full">
              <>
                <BiHeart size={24} className="mr-2 text-gray-500" />{" "}
                <span>Wishlist</span>
              </>
            </Link>
          </li>
          <li className="relative flex items-center px-4 cursor-pointer group">
            {session ? (
              <>
                <div className="relative h-[20px] md:h-[30px] w-[20px] md:w-[30px] mr-2 rounded-full overflow-hidden">
                  <Image src={session.user.image} alt="profileImg" fill />
                </div>
                <span>{session.user.name}</span>
              </>
            ) : (
              <>
                <BiUser size={24} className="mr-2 text-gray-500" />
                <span>Account</span>
              </>
            )}
            <FiChevronDown size={20} className="hidden ml-2 md:block" />

            <div className="absolute z-[999] overflow-hidden transition-all duration-500 w-0 group-hover:w-64 sm:group-hover:w-80 -right-2 top-8 sm:top-12 max-h-[500px] bg-white">
              <div className="border shadow">
                <h1 className="p-4 text-center border-b-2 cursor-default sm:text-xl">
                  Welcome to
                  <span className="font-bold text-orange-400"> Khati </span>
                </h1>
                {session ? (
                  <div className="flex items-start p-4 border-b-2 cursor-default">
                    <div className="h-10 w-10 sm:h-[50px] sm:w-[50px] relative mr-2 rounded-full overflow-hidden">
                      <Image src={session.user.image} alt="profileImg" fill />
                    </div>

                    <div className="pl-4">
                      <h1 className="text-base">Welcome Back,</h1>
                      <h2 className="text-xl font-bold">{session.user.name}</h2>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-4 border-b-2">
                    <Link
                      href={"/register"}
                      className="w-full px-4 py-2 mx-2 font-bold text-center text-white bg-blue-500">
                      Register
                    </Link>
                    <Link
                      href={"/login"}
                      className="w-full px-4 py-2 mx-2 font-bold text-center text-blue-500 bg-gray-200 border-2 border-blue-500">
                      Login
                    </Link>
                  </div>
                )}

                <ul>
                  <li className="p-4 border-b border-gray-100 hover:bg-gray-100 hover:shadow-inner">
                    Account
                  </li>
                  <li className="p-4 border-b border-gray-100 hover:bg-gray-100 hover:shadow-inner">
                    My Orders
                  </li>
                  <li className="p-4 border-b border-gray-100 hover:bg-gray-100 hover:shadow-inner">
                    Message Center
                  </li>
                  <li className="p-4 border-b border-gray-100 hover:bg-gray-100 hover:shadow-inner">
                    Address
                  </li>
                  <li className="p-4 border-b border-gray-100 hover:bg-gray-100 hover:shadow-inner">
                    Wishlist
                  </li>

                  {session && (
                    <li
                      className="p-4 bg-red-500 hover:bg-red-600 hover:shadow-inner"
                      onClick={() => signOut()}>
                      <button className="w-full h-full text-white ">
                        LogOut
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
