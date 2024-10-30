"use client";
import { Stack } from "@mui/material";
import { HomeComp } from "@/components/home/HomeComp";

export default function Home() {
  return (
    <Stack>
      <Stack sx={{ minHeight: "100vh", display: "flex", direction: "column" }}>
        <HomeComp />
      </Stack>
    </Stack>
  );
}
