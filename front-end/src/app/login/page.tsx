"use client";
import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUser } from "@/provider/UserProvider";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  });

  const handleSubmit = async () => {
    console.log(password);

    try {
      const { data }: any = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      const dataToken = data.token;
      window.localStorage.setItem("token", dataToken);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error: any) {
      const message = error.response?.data?.message || "Error login";
      alert(message);
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
      <Typography color="primary.main" sx={{ fontSize: "24px" }}>
        Нэвтрэх
      </Typography>

      <Stack
        gap={4}
        sx={{ width: "334px", display: "flex", justifyContent: "center" }}
      >
        <Input
          name=""
          label="Нэр"
          placeholder="Нэр"
          helperText=""
          inputHandler={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          name=""
          label="Нууц үг"
          placeholder="Нууц үг"
          helperText=""
          inputHandler={(e) => {
            setPassword(e.target.value);
          }}
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
            }}
          >
            Нууц үг мартсан
          </Typography>
        </Link>
      </Stack>

      <Link href={"./register"} style={{ textDecoration: "none" }}>
        <Stack sx={{ width: "334px" }}>
          <CustomButton
            text="Бүртгүүлэх"
            textColor="secondary.main"
            handleClick={() => {
              console.log("Button clicked!");
            }}
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
