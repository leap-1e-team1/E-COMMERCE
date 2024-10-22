import { Stack, Box, Typography, ImageList, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const Savebox = () => {
  const routers = [
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
    <Stack
      sx={{
        width: "622px",
        height: "132px",
        radius: "16px",
        border: "1px",
        padding: "16px",
        gap: "24px",
      }}
    >
      {routers.map(({ text, price, image }, index) => (
        <Stack
          sx={{ display: "flex", flexDirection: "row" }}
          key={index}
          spacing={1}
        >
          <ImageList>
            <img src={image} style={{ width: "100px", height: "100px" }} />
          </ImageList>
          <Stack>
            <Typography variant="h6">{text}</Typography>
            <Typography variant="body1">{price}</Typography>
            <Button
              sx={{ width: "81px", radius: "14px", height: "28px" }}
              variant="contained"
              color="secondary"
            >
              Сагслах
            </Button>
          </Stack>
          <FavoriteIcon />
        </Stack>
      ))}
    </Stack>
  );
};

export default Savebox;
