"use client";
import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <Stack
      gap={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
          label="Нэр"
          placeholder="Нэр"
          helperText=""
          inputHandler={() => {
            console.log();
          }}
        />
        <Input
          label="Нууц үг"
          placeholder="Нууц үг"
          helperText=""
          inputHandler={() => {
            console.log();
          }}
        />
        <CustomButton
          text="Нэвтрэх"
          textColor="background.paper"
          handleClick={() => console.log("Button clicked!")}
          bgColor="secondary.main"
          hoverColor="primary.main"
          height="36px"
          border="secondary.main"
        />
        <Link href="./register">
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

      <Stack sx={{ width: "334px" }}>
        <CustomButton
          text="Бүртгүүлэх"
          textColor="secondary.main"
          handleClick={() => console.log("Button clicked!")}
          bgColor="background.paper"
          hoverColor="primary.main"
          height="36px"
          border="secondary.main"
        />
      </Stack>
    </Stack>
  );
}
