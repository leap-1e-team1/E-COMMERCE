import { Stack, Box, Typography, ImageList, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { borders } from "@mui/system";

type SaveBoxProps = {
  items: itemsType[];
};

type itemsType = {
  text: string;
  price: string;
  image: string;
};

const Savebox = ({ items }: SaveBoxProps) => {
  return (
    <Stack
      sx={{
        width: "622px",
        height: "132px",
        borderRadius: "16px",
        padding: "16px",
        gap: "24px",
      }}
    >
      {items.map(({ text, price, image }, index) => (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #ECEDF0",
            padding: "16px",
            gap: "24px",
          }}
          key={index}
          spacing={1}
        >
          <Stack sx={{ width: "100px", height: "100px" }}>
            <img src={image} style={{ width: "100px", height: "100px" }} />
          </Stack>
          <Stack
            sx={{
              marginTop: 0,
              width: "402px",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Typography variant="h6">{text}</Typography>
            <Typography variant="body1">{price}</Typography>
            <Button
              sx={{ width: "81px", borderRadius: "14px", height: "28px" }}
              variant="contained"
              color="secondary"
            >
              сагслах
            </Button>
          </Stack>
          <Button sx={{ width: "20px", height: "20px" }}>
            <FavoriteIcon />
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};

export default Savebox;
