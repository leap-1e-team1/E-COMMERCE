"use client";
import { Typography, Stack } from "@mui/material";
import { CustomButton } from "./Button";
import { Input } from "./Input";
import OTPEmailIcon from "./OTPEmailIcon";
import OTPField from "./OTPField";
import { FormEvent } from "react";

type OtpComponentsPropsType = {
  continueHandler: () => void;
};

export default function OTP({ continueHandler }: OtpComponentsPropsType) {
  return (
    <Stack
      sx={{
        marginTop: "105px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* OTPEmailIcon now spreads sx to allow custom styles */}
      <OTPEmailIcon
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "29px",
        }}
      />

      <Typography
        sx={{
          color: "#09090B",
          fontSize: 24,
          fontFamily: "Inter",
          fontWeight: 700,
          marginBottom: "8px",
        }}
      >
        Баталгаажуулах
      </Typography>

      <Typography
        sx={{
          color: "#18181B",
          fontSize: 16,
          fontFamily: "Inter",
          fontWeight: 400,
          marginBottom: "24px",
        }}
      >
        “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
      </Typography>

      <Stack>
        <OTPField continueHandler={continueHandler} />
      </Stack>

      <Typography
        sx={{
          color: "#71717A",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: 500,
          textDecoration: "underline",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        Дахин илгээх (30)
      </Typography>
    </Stack>
  );
}
