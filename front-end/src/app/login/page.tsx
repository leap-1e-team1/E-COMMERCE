"use client";
import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Stack, Typography } from "@mui/material";

export default function Login() {
  return (
    <Stack
      gap={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography color="primary.main">Нэвтрэх</Typography>

      <Stack gap={4} sx={{ width: "334px" }}>
        <Input label="Нэр" placeholder="Нэр" />
        <Input label="Нууц үг" placeholder="Нууц үг" />
        <CustomButton
          text="Нэвтрэх"
          handleClick={() => console.log("Button clicked!")}
        />
      </Stack>
    </Stack>
  );
}
