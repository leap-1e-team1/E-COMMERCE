import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { LeftBar } from "@/components/LeftBar";
import { OrderComp } from "@/components/OrderComp";
import React from "react";

const OrderPage = () => {
  return (
    <div>
      <AdminHeaderComp />
      <LeftBar bgColor="Захиалга" />
      <OrderComp />
    </div>
  );
};

export default OrderPage;
