"use client";

import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "@/provider/UserProvider";
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import Loading from "@/components/Loading";

export default function Login() {
  const { loginHandler, isLoggedIn } = useUser();
  const router = useRouter();

  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/confirm"); // Redirect to confirm page if logged in
    }
  }, [isLoggedIn, router]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const logInputValue = async () => {
    const { email, password } = inputValue;
    setLoading(true);
    try {
      await loginHandler(email, password);
      router.push("/confirm"); // Redirect after successful login
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full">
      {loading && <Loading />}

      <div className="flex w-1/2 justify-center items-center gap-2 flex-col">
        <Typography sx={{ fontSize: "32px", color: "primary.main" }}>
          Нэвтрэх
        </Typography>
        <Stack gap={4} sx={{ width: "350px" }}>
          <Input
            label="Нэр"
            name="email"
            placeholder="Email"
            helperText=""
            inputHandler={handleChange}
          />
          <Input
            label="Нууц үг"
            name="password"
            placeholder="Password"
            helperText=""
            inputHandler={handleChange}
          />

          <CustomButton
            text="Log In"
            textColor="background.paper"
            handleClick={logInputValue}
            bgColor="secondary.main"
            hoverColor="primary.main"
            height="36px"
            border="secondary.main"
          />
        </Stack>

        <div className="flex mt-8 gap-4">
          <Typography>Don't have an account?</Typography>
          <Link className="text-blue-500" href="/signup">
            Sign up
          </Link>
        </div>
      </div>

      <div className="flex w-[50%] bg-blue-600"></div>
    </div>
  );
}
