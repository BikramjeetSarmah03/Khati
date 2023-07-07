"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (provider) => {
    await signIn(provider);

    router.push("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <button className="px-4 py-2" onClick={() => handleLogin("github")}>
        Sign In With Github
      </button>

      <button className="px-4 py-2" onClick={() => signIn("google")}>
        Sign In With Google
      </button>

      <button className="px-4 py-2" onClick={() => signIn("auth0")}>
        Sign In With Auth0
      </button>
    </div>
  );
}
