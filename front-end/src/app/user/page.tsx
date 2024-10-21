"use client";

import { OrderHIstory } from "@/components/User/OrderHistory";
import { UserDetail } from "@/components/User/UserDetail";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ToggleWords = ["userDetail", "history"];

const User = () => {
  const [toggle, setToggle] = useState(ToggleWords[0]);

  const toggleHandler = (word: string) => {
    setToggle(word);
  };

  return (
    <Stack
      justifyContent={"center"}
      gap={"20px"}
      pt={"100px"}
      mb={"100px"}
      direction={"row"}
    >
      <Stack sx={{ gap: "4px" }}>
        <Button
          onClick={() => toggleHandler("user")}
          sx={{ bgcolor: `${toggle === "user" && "#FFFFFF"}` }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              paddingY: "8px",
              paddingX: "16px",
              gap: "8px",
            }}
          >
            Хэрэглэгчийн хэсэг
          </Typography>
        </Button>
        <Button
          onClick={() => toggleHandler("history")}
          sx={{ bgcolor: `${toggle === "history" && "#FFFFFF"}` }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              paddingY: "8px",
              paddingX: "16px",
              gap: "8px",
            }}
          >
            Захиалгын түүх
          </Typography>
        </Button>
      </Stack>
      <Stack>{toggle === "user" ? <UserDetail /> : <OrderHIstory />}</Stack>
    </Stack>
  );
};

export default User;
