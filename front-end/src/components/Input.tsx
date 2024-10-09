"use client";

import { TextField } from "@mui/material";

type InputProps = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      //   sx={{ py: 2, px: 3, height: "36px" }}
      placeholder={placeholder}
    />
  );
};
