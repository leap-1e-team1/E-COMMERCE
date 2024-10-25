import React, { useState } from "react";
import PropTypes from "prop-types";
import { Stack, Box, Typography, ImageList, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Savebox from "./Savebox";

const Savecomp = () => {
  const items = [
    {
      text: "Chunky Glyph Tee",
      price: "120000₮",
      image: "./save1.png",
    },
    {
      text: "Doodle Hoodie",
      price: "120000₮",
      image: "./save2.png",
    },
    {
      text: "Local Styles Crewneck",
      price: "120000₮",
      image: "./save3.png",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "672px",
          height: "472px",
          marginTop: "120px",
          marginBottom: "209px",
          gap: "16px",
        }}
      >
        <Typography>Хадгалсан бараа({items.length})</Typography>
        <Savebox items={items} />
      </Box>
    </Box>
  );
};

export default Savecomp;
