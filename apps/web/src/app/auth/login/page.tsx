"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SocialButtons from "@/components/ui/social-buttons";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Please enter email",
    })
    .email("Please enter a valid email"),
  password: z.string().min(1, { message: "Please enter password" }),
});

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const toggleShowPass = () => setShowPass(!showPass);

  return (
    <div className="bg-white border shadow rounded-md w-full max-w-96">
      <h1 className="border-b p-4 text-center text-xl">
        Login To{" "}
        <span className="font-semibold font-serif text-orange-500">Khati</span>
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Password"
                      {...field}
                      type={showPass ? "text" : "password"}
                    />
                    <button
                      className="absolute top-2 right-2 z-10"
                      type="button"
                      onClick={toggleShowPass}
                    >
                      {showPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-sm text-right font-semibold text-blue-600 ">
            <Link href={"/auth/forgot-password"} className="hover:underline">
              Forgot Password ?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>

          <div className="text-center flex items-center justify-center gap-4">
            <div className="h-px w-full bg-gray-200" />
            <h2 className="text-nowrap">Or continue with</h2>
            <div className="h-px w-full bg-gray-200" />
          </div>

          <SocialButtons />

          <div className="text-sm text-center">
            {`Don't`} have an account ?{" "}
            <Link
              href={"/auth/register"}
              className="text-blue-600 hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
