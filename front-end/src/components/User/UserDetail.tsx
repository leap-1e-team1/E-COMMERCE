"use client";

import { Stack, Typography } from "@mui/material";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

type UserDataTypes = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
};

export const UserDetail = () => {
  const token = window.localStorage.getItem("token");
  const [userInput, setUserInput] = useState({
    lastName: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const updateClickHandler = () => {
    try {
      axios.post(`${process.env.BACKEND_URL}/userUpdate`, userInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("medeelel shinechlegdlee");
    } catch (error) {
      console.error("Failed to update user information");
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };
  const userId = window.localStorage.getItem("user");

  useEffect(() => {
    const usernameFetch = async () => {
      if (token) {
        try {
          const { data } = await axios.get<UserDataTypes>(
            `${process.env.BACKEND_URL}/username/${userId}`
          );
          console.log(data);
          setUserInput(data);
        } catch (error: any) {
          const message = error.response?.data?.message || "error";

          console.log(message);
        }
      }
    };
    usernameFetch();
  }, []);
  console.log(userInput);

  return (
    <Stack gap={"16px"} direction={"column"}>
      <Typography fontSize={"18px"} fontWeight={"700"}>
        Хэрэглэгчийн хэсэг
      </Typography>
      <Stack sx={{ border: "1px solid #E4E4E7" }}></Stack>
      <Stack direction={"column"} gap={"20px"}>
        <Stack gap={"8px"}>
          <Typography fontSize={"14px"} fontWeight={"500"}>
            Овог:
          </Typography>
          <input
            name="lastName"
            type="text"
            onChange={handleChange}
            value={userInput.lastName}
            style={{
              width: "620px",
              height: "28px",
              border: "1px solid #E4E4E7",
              borderRadius: "18px",
              paddingBlock: "12px",
              paddingInline: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
        </Stack>
        <Stack gap={"8px"}>
          <Typography fontSize={"14px"} fontWeight={"500"}>
            Нэр:
          </Typography>
          <input
            name="firstName"
            type="text"
            onChange={handleChange}
            value={userInput.firstName}
            style={{
              width: "620px",
              height: "28px",
              border: "1px solid #E4E4E7",
              borderRadius: "18px",
              paddingBlock: "12px",
              paddingInline: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
        </Stack>
        <Stack gap={"8px"}>
          <Typography fontSize={"14px"} fontWeight={"500"}>
            Утасны дугаар:
          </Typography>
          <input
            name="phoneNumber"
            type="text"
            onChange={handleChange}
            value={userInput.phoneNumber}
            style={{
              width: "620px",
              height: "28px",
              border: "1px solid #E4E4E7",
              borderRadius: "18px",
              paddingBlock: "12px",
              paddingInline: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
        </Stack>
        <Stack gap={"8px"}>
          <Typography fontSize={"14px"} fontWeight={"500"}>
            Имэйл хаяг:
          </Typography>
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={userInput.email}
            style={{
              width: "620px",
              height: "28px",
              border: "1px solid #E4E4E7",
              borderRadius: "18px",
              paddingBlock: "12px",
              paddingInline: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
        </Stack>
        <Stack gap={"8px"}>
          <Typography fontSize={"14px"} fontWeight={"500"}>
            Хаяг:
          </Typography>
          <input
            name="address"
            type="text"
            onChange={handleChange}
            value={userInput.address}
            style={{
              width: "620px",
              height: "68px",
              border: "1px solid #E4E4E7",
              borderRadius: "18px",
              paddingBlock: "0px",
              paddingInline: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
        </Stack>
      </Stack>
      <Stack direction={"row-reverse"}>
        <Button
          onClick={updateClickHandler}
          className="bg-blue-600 w-[212px] hover:bg-blue-700 h-[36px] rounded-3xl text-white  text-sm font-medium "
        >
          Мэдээлэл шинэчлэх
        </Button>
      </Stack>
    </Stack>
  );
};
