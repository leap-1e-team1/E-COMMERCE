import { ImageList, Typography } from "@mui/material";
import React from "react";

export const ProductComponent = () => {
  return (
    <div
      style={{
        width: "1040px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ImageList>
          <img
            src="/image0.png"
            alt=""
            style={{ width: "244px", height: "331px", borderRadius: "12px " }}
          />
        </ImageList>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", color: "#000000" }}
        >
          The Prompt Magazine
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "700", color: "#000000" }}
        >
          120'000₮{" "}
        </Typography>
      </div>
    </div>
  );
};
