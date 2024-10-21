import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { LeftBar } from "@/components/LeftBar";
import { SettingsComp } from "@/components/SettingsComp";
import React from "react";

const SettingsPage = () => {
  return (
    <div>
      <AdminHeaderComp />
      <LeftBar />
      <SettingsComp />
    </div>
  );
};

export default SettingsPage;
