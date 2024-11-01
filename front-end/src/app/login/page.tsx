"use client";

import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUser } from "@/provider/UserProvider";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { isLoggedIn, loginHandler } = useUser();

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("Имэйл болон нууц үг оруулна уу.");
      return;
    }

    try {
      await loginHandler(email, password);
      toast.success("Амжилттай нэвтэрлээ!");
      router.push("/"); // Redirect after successful login
    } catch (error: any) {
      const message = error.response?.data?.message || "Нэвтрэхэд алдаа гарлаа";
      toast.error(message);
    }
  };

  // Redirect if already logged in
  if (isLoggedIn) {
    router.push("/");
    return null;
  }

  return (
    <Stack
      gap={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "108px",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "Inter",
          fontWeight: 600,
          textAlign: "center",
        }}
        color="primary"
      >
        Нэвтрэх
      </Typography>

      <Stack
        gap={4}
        sx={{ width: "334px", display: "flex", justifyContent: "center" }}
      >
        <Input
          name="Email"
          label="Имэйл хаяг"
          type="email"
          placeholder=""
          helperText=""
          value={email}
          inputHandler={(e) => setEmail(e.target.value)}
        />
        <Input
          name="Password"
          label="Нууц үг"
          type="password"
          placeholder=""
          helperText=""
          value={password}
          inputHandler={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          text="Нэвтрэх"
          textColor="background.paper"
          handleClick={handleSubmit}
          bgColor="secondary.main"
          hoverColor="primary.main"
          height="36px"
          border="secondary.main"
        />

        <Link href="/forget-pass">
          <Typography
            component="div"
            color="text.secondary"
            sx={{
              textAlign: "center",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Нууц үг мартсан
          </Typography>
        </Link>
      </Stack>

      <Link href="/register" style={{ textDecoration: "none" }}>
        <Stack sx={{ width: "334px" }}>
          <CustomButton
            text="Бүртгүүлэх"
            textColor="secondary.main"
            bgColor="background.paper"
            hoverColor="primary.main"
            height="36px"
            border="secondary.main"
          />
        </Stack>
      </Link>
    </Stack>
  );
}
