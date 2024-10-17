"use client";

import { colors, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

type InputProps = {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  helperText: string;
  inputHandler: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  label,
  placeholder,
  helperText,
  name,
  value,
  inputHandler,
}: InputProps) => {
  return (
    <TextField
      label={label}
      name={name}
      variant="outlined"
      //   sx={{ py: 2, px: 3, height: "36px" }}
      placeholder={placeholder}
      helperText={helperText}
      value={value}
      onChange={inputHandler}
    />
  );
};
