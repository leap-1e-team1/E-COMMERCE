import { Button } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
  hoverColor?: string;
  height?: string;
  border: string;
  handleClick?: () => void;
  handleClickVoid?: (_: any) => Promise<void>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bgColor,
  hoverColor,
  height,
  handleClick,
  border,
  textColor,
}) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        height: height || "auto",
        "&:hover": {
          backgroundColor: hoverColor,
        },
        border: border ? `1px solid ${border}` : "none",
      }}
    >
      {text}
    </Button>
  );
};
