"use client";

import { colors, TextField } from "@mui/material";

type InputProps = {
  label: string;
  placeholder: string;
  helperText: string;
  inputHandler: (e: any) => void;
  sx?: any;
  name: any;
};

export const Input = ({
  name,
  label,
  placeholder,
  helperText,
  inputHandler,
  sx,
}: InputProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      sx={sx}
      name={name}
      placeholder={placeholder}
      helperText={helperText}
      onChange={inputHandler}
    />
  );
};
