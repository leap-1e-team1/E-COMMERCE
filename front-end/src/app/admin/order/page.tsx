import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { LeftBar } from "@/components/LeftBar";
import { OrderComp } from "@/components/OrderComp";
import { Box, Stack } from "@mui/material";
import React from "react";

const OrderPage = () => {
  return (
    <Box>
      <AdminHeaderComp />
      <Stack flexDirection={"row"}>
        <LeftBar bgColor="Захиалга" />
        <OrderComp />
      </Stack>
    </Box>
  );
};

export default OrderPage;
