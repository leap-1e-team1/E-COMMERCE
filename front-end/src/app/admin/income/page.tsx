import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { IncomeComp } from "@/components/IncomeComp";
import { LeftBar } from "@/components/LeftBar";
import { Box, Stack } from "@mui/system";
import React from "react";

const IncomePage = () => {
  return (
    <Box>
      <AdminHeaderComp />
      <Stack flexDirection={"row"}>
        <LeftBar bgColor="Орлого" />
        <IncomeComp />
      </Stack>
    </Box>
  );
};

export default IncomePage;
