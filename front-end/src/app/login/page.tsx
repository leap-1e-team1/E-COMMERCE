"use client";
import { CustomButton } from "@/components/Button";
import { Stack, Typography } from "@mui/material";

export default function Login() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography color="primary.main">Нэвтрэх</Typography>

      <Stack sx={{ width: "334px" }}>
        <CustomButton
          text="Нэвтрэх"
          handleClick={() => console.log("Button clicked!")}
        />
      </Stack>
    </Stack>
  );
}
