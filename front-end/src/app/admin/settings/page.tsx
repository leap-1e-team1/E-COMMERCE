import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { DashboardComp } from "@/components/DashboardComp";
import { LeftBar } from "@/components/LeftBar";
import { SettingsComp } from "@/components/SettingsComp";
import { Stack } from "@mui/material";
import React from "react";

const SettingsPage = () => {
  return (
    <div>
      <AdminHeaderComp />
      <Stack flexDirection={"row"} sx={{ width: "100vw" }}>
        <LeftBar bgColor="Тохиргоо" />
        <SettingsComp />
      </Stack>
    </div>
  );
};

export default SettingsPage;
