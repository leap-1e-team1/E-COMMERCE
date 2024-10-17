"use client";

import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

const Register = () => {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [num, setNum] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
    console.log(userDetail);
    // Regular expression to check for the conditions:
    const hasUpperCase: boolean = /[A-Z]/.test(userDetail.password);
    const hasLowerCase: boolean = /[a-z]/.test(userDetail.password);
    const hasNumber: boolean = /\d/.test(userDetail.password);
    const hasSpecialChar: boolean = /[!@#$%^&*(),.?":{}|<>]/.test(
      userDetail.password
    );
    if (hasUpperCase) {
      setUpperCase((prev) => !prev);
    }
    if (hasLowerCase) {
      setLowerCase(true);
    } else {
      setUpperCase(false);
    }
    if (hasNumber) {
      setNum(true);
    } else {
      setUpperCase(false);
    }
    if (hasSpecialChar) {
      setSpecialChar(true);
    } else {
      setUpperCase(false);
    }
    // Check if all conditions are met
    // console.log(hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar);
    console.log(hasUpperCase);
  };
  console.log(upperCase);

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
          value={userDetail.name}
          helperText=""
          name="name"
          inputHandler={handleChange}
        />
        <Input
          placeholder=""
          name="email"
          label="Имэйл хаяг"
          value={userDetail.email}
          helperText=""
          inputHandler={handleChange}
        />
        <Input
          label="Нууц үг"
          placeholder=""
          name="password"
          value={userDetail.password}
          helperText=""
          inputHandler={handleChange}
        />
        <Input
          label="Нууц үг давтах "
          placeholder=""
          name="rePassword"
          value={userDetail.rePassword}
          helperText="Нууц үг ижил биш байна"
          inputHandler={handleChange}
        />
        <List disablePadding sx={{ listStyleType: "disc", marginLeft: "20px" }}>
          <ListItem
            disablePadding
            sx={{
              display: "list-item",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "20px",
              color: `#71717A`,
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
        <CustomButton
          text="Нэвтрэх"
          textColor="secondary.main"
          handleClick={() => console.log("Button clicked!")}
          bgColor="secondary.light"
          hoverColor="primary.main"
          height="36px"
          border="secondary.main"
        />
      </Stack>
    </Stack>
  );
};
export default Register;
