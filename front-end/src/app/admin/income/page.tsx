import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { IncomeComp } from "@/components/IncomeComp";
import { LeftBar } from "@/components/LeftBar";
import React from "react";

const IncomePage = () => {
  return (
    <div>
      <AdminHeaderComp />
      <LeftBar bgColor="Орлого" />
      <IncomeComp />
    </div>
  );
};

export default IncomePage;
