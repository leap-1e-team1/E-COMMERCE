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
  adminLoginHandler: (email: string, password: string) => Promise<void>;
  isLoggedIn: boolean;
  logOutHandler: () => void;
  isAdminLoggedIn: boolean;
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
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  const router = useRouter();

  const loginHandler = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const res = await axios.post<CloudinaryUploadResponse>(
        `${process.env.BACKEND_URL}/login`,
        { email, password }
      );

      window.localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      router.push("/");
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      throw new Error(message);
    }
  };

  const adminLoginHandler = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const res = await axios.post<CloudinaryUploadResponse>(
        `${process.env.BACKEND_URL}/adminlogin`,
        { email, password }
      );

      setIsAdminLoggedIn(true);
      window.localStorage.setItem("token", res.data.token);
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
    // backend how is it?
    if (token) {
      setIsAdminLoggedIn(true);
      setIsLoggedIn(true);
    } else {
      setIsAdminLoggedIn(false);
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        loginHandler,
        adminLoginHandler,
        isLoggedIn,
        isAdminLoggedIn,
        logOutHandler,
      }}
    >
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

// aa
