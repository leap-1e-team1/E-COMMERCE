import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { IncomeComp } from "@/components/IncomeComp";
import { LeftBar } from "@/components/LeftBar";
import { Box, Stack } from "@mui/material";
import React from "react";

const IncomePage = () => {
  return (
    <Box>
      <AdminHeaderComp />
      <Stack flexDirection={"row"} sx={{ width: "100vw" }}>
        <LeftBar bgColor="Орлого" />
        <IncomeComp />
      </Stack>
    </Box>
  );
};

export default IncomePage;
