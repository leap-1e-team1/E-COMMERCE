import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { LeftBar } from "@/components/LeftBar";
import { OrderDetailsComp } from "@/components/OrderDetailsComp";
import { Box, Stack } from "@mui/system";
import React from "react";

const OrderDetailsPage = () => {
  return (
    <Box>
      <AdminHeaderComp />
      <Stack flexDirection={"row"}>
        <LeftBar bgColor="" />
        <OrderDetailsComp />
      </Stack>
    </Box>
  );
};

export default OrderDetailsPage;
