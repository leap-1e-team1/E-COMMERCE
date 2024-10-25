import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { LeftBar } from "@/components/LeftBar";
import { ProductComp } from "@/components/ProductComp";
import { display } from "@mui/system";
import { Box, Stack, Typography } from "@mui/material";

import React from "react";

const ProductPage = () => {
  return (
    <div>
      <AdminHeaderComp />

      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <LeftBar bgColor="Бүтээгдэхүүн" />
        <ProductComp />
      </Stack>
    </div>
  );
};

export default ProductPage;
