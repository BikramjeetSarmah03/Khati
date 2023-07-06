import Image from "next/image";
import { BiSearch, BiHeart, BiUser } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const user = true;

  return (
    <header>
      <nav className="flex items-center justify-between p-4 shadow-xl">
        <h1 className="text-3xl font-bold text-orange-400">Khati</h1>
        <div className="flex items-center w-full max-w-xl pl-4 overflow-hidden border rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 pr-4 focus:outline-none"
          />
          <div className="p-4 bg-yellow-400">
            <BiSearch />
          </div>
        </div>
        <div>Cart</div>
      </nav>

      <nav className="p-2 bg-gray-50">
        <ul className="flex items-center justify-center">
          <li className="px-4 border-r border-gray-400">INR</li>
          <li className="px-4 border-r border-gray-400">Buyer Protection</li>
          <li className="px-4 border-r border-gray-400">Customer Service</li>
          <li className="px-4 border-r border-gray-400">Help</li>
          <li className="flex items-center px-4 border-r border-gray-400 ">
            <BiHeart size={24} className="mr-2 text-gray-500" />{" "}
            <span>Wishlist</span>
          </li>
          <li className="relative flex items-center px-4 cursor-pointer group">
            {user ? (
              <>
                <Image
                  src={
                    "https://res.cloudinary.com/bikramjeet/image/upload/v1687036602/Khati/avatars/rr1t2y18xwihj97k408s.png"
                  }
                  alt="profileImg"
                  height={30}
                  width={30}
                  className="mr-2 rounded-full "
                />
                <span>Bikram</span>
              </>
            ) : (
              <>
                <BiUser size={24} className="mr-2 text-gray-500" />
                <span>Account</span>
              </>
            )}
            <FiChevronDown size={20} className="ml-2" />

            <div className="absolute z-0 overflow-hidden transition-all duration-500 w-0 group-hover:w-80 -right-0 top-12 max-h-[500px]">
              <div className="border shadow">
                <h1 className="p-4 text-xl text-center border-b-2 cursor-default">
                  Welcome to
                  <span className="font-bold text-orange-400"> Khati </span>
                </h1>
                {user ? (
                  <div className="flex items-start p-4 border-b-2 cursor-default">
                    <Image
                      src={
                        "https://res.cloudinary.com/bikramjeet/image/upload/v1687036602/Khati/avatars/rr1t2y18xwihj97k408s.png"
                      }
                      alt="profileImg"
                      height={50}
                      width={50}
                      className="mr-2 rounded-full"
                    />

                    <div className="pl-4">
                      <h1 className="text-base">Welcome Back,</h1>
                      <h2 className="text-xl font-bold">{"Bikram"}</h2>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-4 border-b-2">
                    <button className="w-full px-4 py-2 mx-2 font-bold text-white bg-blue-500">
                      Register
                    </button>
                    <button className="w-full px-4 py-2 mx-2 font-bold text-blue-500 bg-gray-200 border-2 border-blue-500">
                      Login
                    </button>
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

                  <li className="p-4 bg-red-500 hover:bg-red-600 hover:shadow-inner">
                    <button className="w-full h-full text-white ">
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
