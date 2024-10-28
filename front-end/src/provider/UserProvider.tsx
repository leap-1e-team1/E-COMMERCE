"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";

interface UserContextType {
  loginHandler: (email: string, password: string) => Promise<void>;
  isLoggedIn: boolean;
  logOutHandler: () => void;
}

interface CloudinaryUploadResponse {
  secure_url: string;
  token: string;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface AncestorProviderProps {
  children: ReactNode;
}

export const AncestorProvider: FC<AncestorProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  const loginHandler = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const res = await axios.post<CloudinaryUploadResponse>(
        "https://e-commerce-t6c9.onrender.com/login",
        { email, password }
      );

      window.localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      router.push("/dashboard");
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      throw new Error(message);
    }
  };

  const logOutHandler = (): void => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [router]);

  return (
    <UserContext.Provider value={{ loginHandler, isLoggedIn, logOutHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUser must be used within an AncestorProvider");
  }
  return user;
};
