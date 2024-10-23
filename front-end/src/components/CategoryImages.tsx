"use client";

import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

export const CategoryImages = () => {
  const images = [
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "The Prompt Magazine",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
    },
  ];
  const [isHover, setIsHover] = useState(Number);

  const hoverHandler = (i: number) => {
    setIsHover(i);
  };
  const hoverHandlerLeaver = (i: number) => {
    setIsHover(NaN);
  };

  return (
    <div className="w-[774px] flex flex-wrap gap-y-12 gap-x-2 justify-between">
      {images.map(({ productImage, productName, productPrice }, index) => {
        return (
          <Link
            key={index}
            href={"/user"}
            onMouseEnter={() => {
              hoverHandler(index);
            }}
            onMouseLeave={() => {
              hoverHandlerLeaver(index);
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "colmun",
                gap: "8px",
                width: "245px",
              }}
            >
              <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden">
                <img
                  src={productImage}
                  className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                    isHover === index ? "scale-[1.2]" : ""
                  }`}
                  alt=""
                />
              </div>

              <Stack>
                <Typography sx={{ fontSize: "16px" }}>{productName}</Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  {productPrice}
                </Typography>
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </div>
  );
};
