"use client";
import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUser } from "@/provider/UserProvider";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { isLoggedIn, loginHandler } = useUser();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = async () => {
    try {
      loginHandler(email, password);

      toast.success("Амжилттай нэвтэрлээ!");
    } catch (error: any) {
      const message = error.response?.data?.message || "Нэвтрэхэд алдаа гарлаа";
      toast.error(message);
      console.log(error);
    }
  };

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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontFamily: "Inter",
          fontWeight: 600,
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
          sx=""
          value={email}
          inputHandler={(e) => setEmail(e.target.value)}
        />
        <Input
          name="Password"
          label="Нууц үг"
          type="password"
          placeholder=""
          helperText=""
          sx=""
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

      <Link href="./register" style={{ textDecoration: "none" }}>
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
