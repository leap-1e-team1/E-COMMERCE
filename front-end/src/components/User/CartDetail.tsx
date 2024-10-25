"use client";

import { ImageList, Stack, Typography } from "@mui/material";

export const CartDetail = () => {
  const product: {
    productName: string;
    price: string;
    totalPrice: string;
    quantity: number;
    productPic: string;
  }[] = [
    {
      productName: "Chunky Glyph Tee",
      price: "120000$",
      totalPrice: "120000$",
      quantity: 1,
      productPic: "/save2.png",
    },
  ];
  return (
    <>
      {product.map(
        ({ productName, price, totalPrice, quantity, productPic }, index) => {
          return (
            <Stack
              // alignItems="center"
              // justifyContent="center"
              direction={"row"}
              sx={{ gap: "8px" }}
              key={index}
            >
              <Stack
                justifyContent={"center"}
                sx={{ width: "36px", height: "36px", borderRadius: "4px" }}
              >
                <img src={productPic} alt="" />
              </Stack>
              <Stack
                justifyContent="space-between"
                direction={"column"}
                sx={{ gap: "4px", width: "100%" }}
              >
                <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                  {productName}
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                    {quantity} x {price}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
                    {totalPrice}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          );
        }
      )}
    </>
  );
};
