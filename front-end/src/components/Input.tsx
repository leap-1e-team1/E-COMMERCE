"use client";

import { colors, TextField } from "@mui/material";

type InputProps = {
  label: string;
  placeholder: string;
  helperText: string;
  inputHandler: (e: any) => void;
  sx?: any;
  value: string;
  name: any;
};

export const Input = ({
  name,
  label,
  placeholder,
  helperText,
  inputHandler,
  value,
  sx,
}: InputProps) => {
  return (
    <TextField
      value={value}
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
