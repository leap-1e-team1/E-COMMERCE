"use client";

import { ImageList, Stack, Typography } from "@mui/material";

export const SearchInput = () => {
  const product: {
    productName: string;
    price: string;
    productPic: string;
  }[] = [
    {
      productName: "Chunky Glyph Tee",
      price: "120000$",
      productPic: "/save2.png",
    },
  ];
  return (
    <>
      {product.map(({ productName, price, productPic }, index) => {
        return (
          <Stack
            // alignItems="center"
            // justifyContent="center"
            direction={"row"}
            sx={{
              width: "608px",
              bgcolor: "#FFFFFF",
              borderRadius: "16px",
              padding: "32px",
              gap: "16px",
              top: "69px",
              left: "408px",
            }}
            key={index}
          >
            <Stack
              direction={"row"}
              justifyContent={"center"}
              sx={{ width: "80px", height: "80px", borderRadius: "16px" }}
            >
              <img src={productPic} alt="" />
            </Stack>
            <Stack direction={"column"} sx={{ gap: "4px", width: "433px" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                {productName}
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                {price}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};
