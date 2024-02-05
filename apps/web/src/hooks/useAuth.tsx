import { User } from "@/@types";
import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  setIsAuth: (state: boolean, user?: User | null) => void;
  user: User | null;
}

export const useAuth = create<AuthState>((set) => ({
  isAuth: false,
  user: null,
  setIsAuth: (state: boolean, user?: User | null) =>
    set({ isAuth: state, user }),
}));
