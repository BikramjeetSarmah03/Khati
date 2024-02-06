"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function Navbar() {
  const { isAuth, user } = useAuth();

  return (
    <header className="flex items-center justify-between shadow-md p-4">
      <h1>Khati</h1>

      <nav className="flex items-center gap-4">
        {!isAuth ? (
          <>
            <Link href={"/auth/login"}>Login</Link>
            <Link href={"/auth/register"}>Register</Link>
          </>
        ) : (
          user?.email
        )}
      </nav>
    </header>
  );
}
