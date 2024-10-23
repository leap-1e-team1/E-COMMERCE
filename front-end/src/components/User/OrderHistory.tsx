"use client";
import { Cart } from "@/components/User/Cart";
import { Stack, Typography } from "@mui/material";

export const OrderHIstory = () => {
  return (
    <Stack sx={{ gap: "20px" }}>
      <Stack gap={"16px"} direction={"column"}>
        <Typography fontSize={"18px"} fontWeight={"700"}>
          Захиалгын түүх
        </Typography>
        <Stack sx={{ border: "1px solid #E4E4E7" }}></Stack>
      </Stack>
      <Stack direction={"column"} sx={{ gap: "20px" }}>
        <Cart />
      </Stack>
    </Stack>
  );
};
