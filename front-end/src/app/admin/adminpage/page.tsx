"use client";

import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { DashboardComp } from "@/components/DashboardComp";
import { LeftBar } from "@/components/LeftBar";
import { Box, Stack } from "@mui/material";

const AdminPage = () => {
  return (
    <Box>
      <AdminHeaderComp />

      <Stack flexDirection={"row"} sx={{ width: "100vw" }}>
        <LeftBar bgColor="Хяналтын самбар" />
        <DashboardComp />
      </Stack>
    </Box>
  );
};
export default AdminPage;
