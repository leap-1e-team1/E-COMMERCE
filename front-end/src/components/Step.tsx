"use client";
import * as React from "react";
import Box from "@mui/material/Box";

import Carts from "./Carts";
import Delivery from "./DeliveryInformation";
import Payment from "./Payment";

const steps = [Carts, Delivery, Payment];

export default function () {
  return (
    <Box sx={{ width: "256px", display: "flex", alignItems: "center" }}>
      <div className="bg-blue-600 text-center text-white justify-center pt-1 h-8 w-8 rounded-full">
        <p>1</p>
      </div>
      <div className="flex w-[80px] bg-gray-400 h-1"></div>
      <div className="bg-gray-400 text-center text-black justify-center pt-1 h-8 w-8 rounded-full">
        <p>2</p>
      </div>
      <div className="flex w-[80px] bg-gray-400 h-1"></div>
      <div className="bg-gray-400 text-center text-black justify-center pt-1 h-8 w-8 rounded-full">
        <p>3</p>
      </div>
    </Box>
  );
}
