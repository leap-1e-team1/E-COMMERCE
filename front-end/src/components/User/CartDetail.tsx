"use client";

import { ImageList, Stack, Typography } from "@mui/material";

export const CartDetail = () => {
  return (
    <Stack
      // alignItems="center"
      // justifyContent="center"
      direction={"row"}
      sx={{ gap: "8px" }}
    >
      <Stack
        justifyContent={"center"}
        sx={{ width: "36px", height: "36px", borderRadius: "4px" }}
      >
        <img src="/image.png" alt="" />
      </Stack>
      <Stack
        justifyContent="space-between"
        direction={"column"}
        sx={{ gap: "4px", width: "100%" }}
      >
        <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
          Chunky Glyph Tee
        </Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
            1 x 120’000₮
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
            120’000₮
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
