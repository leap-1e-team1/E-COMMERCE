"use client";

import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import axios from "axios";

interface InputValues {
  username: string;
  email: string;
  password: string;
  RepeatPassword: string;
}

const Register = () => {
  const [inputValue, setInputValue] = useState<InputValues>({
    username: "",
    email: "",
    password: "",
    RepeatPassword: "",
  });
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const logInputValue = async () => {
    if (inputValue.password !== inputValue.RepeatPassword) {
      setError("Passwords do not match");
      return;
    } else {
      try {
        const res = await axios.post("http://localhost:8000/api/user/signup", {
          email: inputValue.email,
          password: inputValue.password,
          username: inputValue.username,
        });
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
        <input
          type={"username"}
          className="w-[350px]"
          name={"username"}
          onChange={handleChange}
          placeholder={"Name"}
        />
        <input
          type={"email"}
          className="w-[350px]"
          name={"username"}
          onChange={handleChange}
          placeholder={"Name"}
        />
        <input
          type={"password"}
          className="w-[350px]"
          name={"username"}
          onChange={handleChange}
          placeholder={"Name"}
        />{" "}
        <input
          type={"email"}
          className="w-[350px]"
          name={"username"}
          onChange={handleChange}
          placeholder={"Name"}
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
          handleClick={logInputValue}
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
