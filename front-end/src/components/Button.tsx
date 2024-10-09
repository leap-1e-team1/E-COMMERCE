"use client";
import { Button } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  text: string;
  handleClick: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  handleClick,
}) => {
  return (
    <Button variant="contained" onClick={handleClick} color="secondary">
      {text}
    </Button>
  );
};
