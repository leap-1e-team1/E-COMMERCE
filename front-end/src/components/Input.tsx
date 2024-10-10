"use client";

import { colors, TextField } from "@mui/material";

type InputProps = {
  label: string;
  placeholder: string;
  helperText: string;
  inputHandler: () => void;
};

export const Input = ({
  label,
  placeholder,
  helperText,
  inputHandler,
}: InputProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      //   sx={{ py: 2, px: 3, height: "36px" }}
      placeholder={placeholder}
      helperText={helperText}
      onChange={inputHandler}
    />
  );
};
