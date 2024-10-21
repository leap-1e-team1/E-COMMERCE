"use client";

import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { DashboardComp } from "@/components/DashboardComp";
import { LeftBar } from "@/components/LeftBar";
import { Box, Stack } from "@mui/material";
import React from "react";

export const AdminPage = () => {
  return (
    <Box>
      <AdminHeaderComp />
      <Stack flexDirection={"row"}>
        <LeftBar />
        <DashboardComp />
      </Stack>
    </Box>
  );
};
export default AdminPage;
