"use client";
import OTP from "@/components/OTP";
import { Stack, Typography } from "@mui/material";
import NewPAss from "../components/NewPass";
import Loading from "../components/Loading";
import { HomeComp } from "@/components/home/HomeComp";

export default function Home() {
  return (
    <Stack sx={{ minHeight: "100vh", display: "flex", direction: "column" }}>
      <HomeComp />
    </Stack>
  );
}
