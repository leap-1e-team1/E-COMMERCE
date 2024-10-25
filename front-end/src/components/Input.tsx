"use client";

import { colors, TextField } from "@mui/material";

type InputProps = {
  label: string;
  placeholder: string;
  helperText: string;
  inputHandler: (e: any) => void;
  sx?: any;
  name: any;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
};

export const Input = ({
  name,
  label,
  placeholder,
  helperText,
  inputHandler,
  sx,
  type,
  value,
}: InputProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      sx={sx}
      type={type}
      name={name}
      placeholder={placeholder}
      helperText={helperText}
      onChange={inputHandler}
      value={value}
    />
  );
};
