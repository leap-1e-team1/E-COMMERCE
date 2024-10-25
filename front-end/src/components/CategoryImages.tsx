"use client";

import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Category from "./Category";
import ProductCategory from "./ProductCategory";
import { useSearchParams } from "next/navigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const CategoryImages = () => {
  const images = [
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "The Prompt Magazine",
      productPrice: "120 000 ₮",
      category: "hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "s",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "l",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Tee",
      size: "m",
      icona: <FavoriteBorderIcon sx={{ color: "black" }} />,
    },
  ];
  const [isHover, setIsHover] = useState(Number);

  const hoverHandler = (i: number) => {
    setIsHover(i);
  };
  const hoverHandlerLeaver = (i: number) => {
    setIsHover(NaN);
  };

  const [filter, setFilter] = useState("");

  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  useEffect(() => {
    setFilter(filterParam as string);
  }, [filterParam]);

  const filteredImages =
    filter?.length >= 1
      ? images.filter((image) => filterParam?.includes(image.category))
      : images;

  return (
    <div className="w-[774px] flex flex-wrap gap-y-12 gap-x-2 justify-between">
      {filteredImages.map(
        (
          { productImage, productName, productPrice, category, size, icona },
          index
        ) => {
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
                <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden relative flex justify-end">
                  <img
                    src={productImage}
                    className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                      isHover === index ? "scale-[1.2]" : ""
                    }`}
                    alt=""
                  />
                  <button className="absolute top-[13px] right-[10px]  ">
                    {icona}
                  </button>
                </div>

                <Stack>
                  <Typography sx={{ fontSize: "16px" }}>
                    {productName}
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>{size}</Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                    {productPrice}
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>{category}</Typography>
                </Stack>
              </Stack>
            </Link>
          );
        }
      )}
    </div>
  );
};
