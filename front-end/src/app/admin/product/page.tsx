import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { LeftBar } from "@/components/LeftBar";
import { ProductComp } from "@/components/ProductComp";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <AdminHeaderComp />
      <LeftBar />
      <ProductComp />
    </div>
  );
};

export default ProductPage;
