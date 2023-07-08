"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);

    try {
      const { data } = await axios.post("/api/auth/password/forgot", { email });

      toast.success(data.message);
    } catch (error) {
      if (error.name === "AxiosError") {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] py-8 lg:min-h-screen">
      <form
        className="p-8 space-y-4 shadow-md bg-gray-50"
        onSubmit={handleFormSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className={`w-full px-4 py-2 text-center text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-blue-600 ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="submit"
          disabled={loading}>
          {loading ? "Sending..." : "Send Reset Process"}
        </button>

        <div>
          <Link
            href={"/login"}
            className="flex items-center text-blue-500 underline">
            <>
              <BiArrowBack className="mr-2 text-black" size={24} />
              Go Back to Login
            </>
          </Link>
        </div>
      </form>
    </div>
  );
}
