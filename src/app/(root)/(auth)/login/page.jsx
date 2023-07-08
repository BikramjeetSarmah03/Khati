"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    try {
      let options = {
        redirect: false,
        email: loginData.email,
        password: loginData.password,
      };

      const res = await signIn("credentials", options);

      if (res.error) {
        return toast.error(res.error);
      }

      toast.success("Login Successfull");
      router.push("/");
    } finally {
      setLoading(false);
      setLoginData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] py-8 lg:min-h-screen">
      <div className="p-8 space-y-4 rounded-md shadow-md bg-gray-50">
        <h1 className="text-xl font-bold text-center">Welcome Back</h1>
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
                setLoginData({ ...loginData, email: e.target.value })
              }
              value={loginData.email}
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
                  setLoginData({ ...loginData, password: e.target.value })
                }
                value={loginData.password}
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

          <div className="w-full text-sm text-right">
            <Link
              href={"/password/forgot"}
              className="text-blue-500 hover:underline">
              Forgot Password ?
            </Link>
          </div>

          <button
            className={`w-full px-4 py-2 text-center text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-blue-600 ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            type="submit"
            disabled={loading}>
            {loading ? "Signing..." : "Sign in to your account"}
          </button>

          <div className="text-sm">
            <span>
              {`Don't`} have a account yet ?{" "}
              <Link
                href={"/register"}
                className="text-blue-500 hover:underline">
                Sign up here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
