"use client";

import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Stack, Typography } from "@mui/material";

const Register = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ height: "100vh" }}
      gap={"24px"}
    >
      <Typography color="text" fontSize={"24px"} fontWeight={"600"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={4} sx={{ width: "334px" }}>
        <Input label="Нэр" placeholder="Нэр" />
        <Input label="Имэйл хаяг" placeholder="Имэйл хаяг" />
        <Input label="Нууц үг" placeholder="Нууц үг" />
        <Input label="Нууц үг давтах " placeholder="Нууц үг давтах " />
        <CustomButton
          text="asd"
          handleClick={() => {
            console.log("Asd");
          }}
        />
      </Stack>
    </Stack>
  );
};
export default Register;
