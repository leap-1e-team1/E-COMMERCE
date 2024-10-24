"use client";
import OTP from "@/components/OTP";
import { Stack, Typography } from "@mui/material";
import NewPAss from "../components/NewPass";
import Loading from "../components/Loading";

import { useState } from "react";
import { response } from "express";
import axios from "axios";
interface ProductCategory {
  images: string;
}

import { HomeComp } from "@/components/home/HomeComp";

export default function Home() {
  const [asd, setAsd] = useState<ProductCategory[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get<ProductCategory[]>(
        "http://localhost:8000/imageavah"
      );

      if (Array.isArray(response.data)) {
        setAsd(response.data);
      } else {
        alert("Unexpected response structure");
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Error fetching data";
      alert(`Error: ${message}`);
    }
  };

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Stack sx={{ minHeight: "100vh", display: "flex", direction: "column" }}>
        <HomeComp />
      </Stack>
    </Stack>
  );
}
