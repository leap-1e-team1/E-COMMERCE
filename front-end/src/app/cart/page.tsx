import Carts from "@/components/Carts";
import Delivery from "@/components/DeliveryInformation";
import Steps from "@/components/Step";
import { Stack } from "@mui/material";

export default function Cart() {
  return (
    <Stack
      gap={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <Steps />
      {/* <Carts /> */}
      <Delivery />
    </Stack>
  );
}
