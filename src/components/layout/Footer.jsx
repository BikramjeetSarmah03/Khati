import Link from "next/link";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="bg-gray-50 ">
      <section className="grid grid-cols-6 gap-12 p-4 sm:grid-cols-12 lg:px-32">
        <div className="col-span-6 sm:col-span-5 lg:col-span-3">
          <h1 className="text-xl font-bold text-orange-400 underline uppercase">
            Khati
          </h1>

          <ul className="mt-4 space-y-2 text-xs text-gray-500 sm:text-sm">
            <li>About us</li>
            <li>Contact us</li>
            <li>Social Responsibility</li>
          </ul>
        </div>
        <div className="col-span-6 sm:col-span-7 lg:col-span-3">
          <h1 className="font-bold uppercase ">Help & Support</h1>

          <ul className="mt-4 space-y-2 text-xs text-gray-500 sm:text-sm">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>How To Order</li>
            <li>How To Track</li>
            <li>Size Guide</li>
          </ul>
        </div>
        <div className="col-span-6 sm:col-span-5 lg:col-span-3">
          <h1 className="font-bold uppercase ">Customer Service</h1>

          <ul className="mt-4 space-y-2 text-xs text-gray-500 sm:text-sm">
            <li>Customer Service</li>
            <li>Terms and Conditions</li>
            <li>Consumers (Transictions)</li>
            <li>Take our feedback survey</li>
          </ul>
        </div>
        <div className="col-span-6 sm:col-span-7 lg:col-span-3">
          <h1 className="font-bold uppercase ">Stay Connected</h1>

          <ul className="mt-4">
            <ul className="flex items-center space-x-4">
              <Link
                href={"/"}
                className="transition-all duration-300 hover:scale-105">
                <BsGithub size={24} />
              </Link>
              <Link
                href={"/"}
                className="transition-all duration-300 hover:scale-105">
                <BsInstagram size={24} />
              </Link>
            </ul>

            <li className="mt-8 space-y-2">
              <h1 className="font-bold text-gray-600">
                Sign up for our newsletter
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="px-4 py-2 outline-none"
                />
                <button className="px-4 py-2 mt-2 text-white bg-blue-500 sm:mt-0 sm:ml-2">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                By clicking the SUBSCRIBEE button, you are aggreeing to{" "}
                <Link href={"/"} className="text-blue-500 underline">
                  our Privacy & Cookie Policy
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center justify-between p-4 mt-4 border-t-2 sm:flex-row">
        <div className="text-gray-600">
          <h1>©2023 Khati.com All Rights Reserved</h1>
          <ul className="flex flex-wrap items-center mt-2 text-xs lg:text-sm">
            <li className="m-2 underline cursor-pointer">Privacy Center</li>
            <li className="m-2 underline cursor-pointer">
              Privacy & Cookie Policy
            </li>
            <li className="m-2 underline cursor-pointer">Manage Cookies</li>
            <li className="m-2 underline cursor-pointer">Terms & Conditions</li>
            <li className="m-2 underline cursor-pointer">Copyright Notice</li>
            <li className="flex items-center m-2 underline cursor-pointer">
              <ImLocation className="mr-2" /> <span> Tezpur</span>
            </li>
          </ul>
        </div>
        <h1 className="flex items-center mt-2 -ml-2 space-x-1 text-sm text-gray-600 sm:mt-0 lg:text-base">
          <span>Made with love by </span>
          <Link href="https://github.com/BikramjeetSarmah03/" passHref>
            <div
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline">
              Bikramjeet Sarmah
            </div>
          </Link>
        </h1>
      </section>
    </footer>
  );
}
