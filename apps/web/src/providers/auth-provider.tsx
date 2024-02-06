"use client";

import { useAuth } from "@/hooks/useAuth";
import { api } from "@/lib/api";
import { ReactNode, useEffect, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const { setAuth } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data: resData } = await api.get("/auth/verify");

        console.log(resData);
      } catch (error) {
        setAuth(false, null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <div>{children}</div>;
}
