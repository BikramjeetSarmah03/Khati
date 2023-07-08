"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";

export default function Register() {
  const router = useRouter();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/signup", {
        ...registerData,
      });

      toast.success(data.message);

      router.push("/");
    } catch (error) {
      if (error.name === "AxiosError") {
        toast.error(error.response.data.message);
        // toast.error(error)
      }
    } finally {
      setLoading(false);
      setRegisterData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] py-8 lg:min-h-screen">
      <div className="p-8 space-y-4 rounded-md shadow-md bg-gray-50">
        <h1 className="text-xl font-bold text-center">
          Welcome to <span className="text-orange-400 underline">Khati</span>
        </h1>
        <div className="flex items-center">
          <button
            className="flex items-center px-4 py-2 mx-2 transition-all duration-300 bg-white border rounded-md hover:bg-gray-200"
            onClick={() => signIn("google")}>
            <Image
              src={"/assets/google.png"}
              alt="googleLogo"
              height={30}
              width={30}
              className="mr-2"
            />
            Log in With Google
          </button>
          <button
            className="flex items-center px-4 py-2 mx-2 transition-all duration-300 bg-white border rounded-md hover:bg-gray-200"
            onClick={() => signIn("github")}>
            <Image
              src={"/assets/github.png"}
              alt="githubLogo"
              height={30}
              width={30}
              className="mr-2"
            />
            Log in With Github
          </button>
        </div>

        <div className="flex items-center space-x-2 text-center">
          <hr className="w-full p-px bg-gray-300" />
          <span>or</span>
          <hr className="w-full p-px bg-gray-300" />
        </div>

        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="John Doe"
              required
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
              value={registerData.name}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              value={registerData.email}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="password"
                required
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
                value={registerData.password}
              />
              <div
                className="absolute cursor-pointer right-2 top-2"
                onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </div>
            </div>
          </div>

          <button
            className={`w-full px-4 py-2 text-center text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-blue-600 ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            type="submit"
            disabled={loading}>
            {loading ? "Registering..." : "Register your account"}
          </button>

          <div className="text-sm">
            <span>
              Already have a account yet ?{" "}
              <Link href={"/login"} className="text-blue-500 hover:underline">
                Login Here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
