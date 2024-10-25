"use client";
import { useState } from "react"; // Make sure to import useState
import { Typography, Stack } from "@mui/material";
import { CustomButton } from "./Button";
import { Input } from "./Input";

type ForgetPassComponentsPropsType = {
  continueHandler: () => void;
};

export default function ForgetPass({
  continueHandler,
}: ForgetPassComponentsPropsType) {
  const [email, setEmail] = useState("");

  return (
    <Stack
      sx={{
        marginTop: "108px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "Inter",
          fontWeight: 600,
          marginBottom: "24px",
        }}
        color="primary"
      >
        Нууц үг сэргээх
      </Typography>

      <Stack
        sx={{
          width: "334px",
          color: "#71717A",
          fontSize: 14,
          fontFamily: "Inter",
          marginBottom: "16px",
          fontWeight: 400,
        }}
      >
        <Input
          name="email"
          label="Имэйл хаяг оруулах"
          type="email"
          sx=""
          value={email}
          helperText=""
          placeholder=""
          inputHandler={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Stack>

      <Stack
        sx={{
          width: "334px",
          color: "#FAFAFA",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: 500,
        }}
      >
        <CustomButton
          text="Илгээх"
          textColor="white"
          hoverColor="black"
          height="36px"
          border="secondary.main"
          bgColor="secondary.main"
          handleClick={continueHandler}
        />
      </Stack>
    </Stack>
  );
}
