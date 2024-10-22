"use client";

import { Image } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";

export const HomeComp = () => {
  const [coverImage, setCoverImage] = useState(
    "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792"
  );
  return (
    <Stack
      gap={"16px"}
      direction={"column"}
      mt={"67px"}
      sx={{ width: "100vw" }}
      alignItems={"center"}
    >
      <img
        src={coverImage}
        alt=""
        className="w-screen h-[474px] object-cover object-top"
      />
    </Stack>
  );
};
