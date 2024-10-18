"use client";

import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Register = () => {
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
          label="Нэр"
          placeholder=""
          helperText=""
          inputHandler={() => {
            console.log("Asd");
          }}
        />
        <Input
          placeholder=""
          label="Имэйл хаяг"
          helperText="Зөв имэйл хаяг оруулна уу"
          inputHandler={() => {
            console.log("Asd");
          }}
        />
        <Input
          label="Нууц үг"
          placeholder=""
          helperText="Нууц үг ижил биш байна"
          inputHandler={() => {
            console.log("Asd");
          }}
        />
        <Input
          label="Нууц үг давтах "
          placeholder=""
          helperText=""
          inputHandler={() => {
            console.log("Asd");
          }}
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
            Том үсэг орсон байх
          </ListItem>
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
            Жижиг үсэг орсон байх
          </ListItem>
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
            Тоо орсон байх
          </ListItem>
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
            Тэмдэгт орсон байх
          </ListItem>
        </List>
        <CustomButton
          text="Үүсгэх"
          textColor="background.paper"
          handleClick={() => console.log("Button clicked!")}
          bgColor="secondary.main"
          hoverColor="primary.main"
          height="36px"
          border="secondary.main"
        />
        <Link className="w-full" href="/login">
          <CustomButton
            text="Нэвтрэх"
            textColor="secondary.main"
            handleClick={() => console.log("Button clicked!")}
            bgColor="primary.contrastText"
            hoverColor="primary.main"
            height="36px"
            border="secondary.main"
          />
        </Link>
      </Stack>
    </Stack>
  );
};
export default Register;
