"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Reset({ params }) {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [crfpassword, setCrfPassword] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showCrfPass, setShowCrfPass] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const { data } = await axios.post("/api/auth/password/validateToken", {
          id: params.id,
        });

        toast.success(data.message);
      } catch (error) {
        toast.error("Token Expired");

        router.push("/password/forgot");
      }
    };

    validateToken();
  }, [params.id, router]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== crfpassword) {
      toast.error("Password Don't Match");
    }

    try {
      const { data } = await axios.post("/api/auth/password/reset", {
        password,
        crfpassword,
        token: params.id,
      });

      toast.success(data.message);

      let options = {
        redirect: false,
        email: data.email,
        password,
      };

      await signIn("credentials", options);
      router.push("/");
    } catch (error) {
      if (error.name === "AxiosError") {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
      setPassword("");
      setCrfPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] py-8 lg:min-h-screen">
      <form
        className="p-8 space-y-4 shadow-md bg-gray-50"
        onSubmit={handleFormSubmit}>
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
              placeholder="Password"
              required
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

        <div>
          <label
            htmlFor="crfPassword"
            className="block mb-2 text-lg font-medium text-gray-900">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showCrfPass ? "text" : "password"}
              name="password"
              id="crfPassword"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Confirm Password"
              required
            />
            <div
              className="absolute cursor-pointer right-2 top-2"
              onClick={() => setShowCrfPass(!showCrfPass)}>
              {showCrfPass ? (
                <AiFillEyeInvisible size={24} />
              ) : (
                <AiFillEye size={24} />
              )}
            </div>
          </div>
        </div>

        <div>
          <Link
            href={"/password/reset"}
            className="text-sm text-blue-500 underline">
            Resend Mail
          </Link>
        </div>

        <button
          className={`w-full px-4 py-2 text-center text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-blue-600 ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="submit"
          disabled={loading}>
          {loading ? "Reseting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
