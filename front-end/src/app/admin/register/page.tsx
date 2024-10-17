"use client";

import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";

import { List, ListItem, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      gap={"16px"}
      mt={"100px"}
      mb={"100px"}
    >
      <Typography color="text" fontSize={"24px"} fontWeight={"600"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={4} sx={{ width: "334px" }}>
        <Input
          inputHandler={() => {
            console.log();
          }}
          label="Нэр"
          placeholder=""
          helperText=""
        />
        <Input
          inputHandler={() => {
            console.log();
          }}
          placeholder=""
          label="Имэйл хаяг"
          helperText=""
        />
        <Input
          inputHandler={() => {
            console.log();
          }}
          label="Нууц үг"
          placeholder=""
          helperText=""
        />
        <Input
          inputHandler={() => {
            console.log();
          }}
          label="Нууц үг давтах "
          placeholder=""
          helperText=""
        />
        <List disablePadding sx={{ listStyleType: "disc", marginLeft: "20px" }}>
          <ListItem
            disablePadding
            sx={{
              display: "list-item",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#71717A",
            }}
          >
            Том, жижиг үсэг, тоо, тэмдэгт орсон байх
          </ListItem>
        </List>
        <CustomButton
          text="Бүртгүүлэх"
          textColor="background.paper"
          handleClick={() => {
            console.log("Button clicked!");
            router.push("/login");
          }}
          bgColor="secondary.main"
          hoverColor="primary.main"
          height="36px"
          border="secondary.main"
        />
      </Stack>
    </Stack>
  );
};
export default Register;
