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
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "m",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "s",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Hoodie",
      size: "l",
    },
    {
      productImage:
        "https://res.cloudinary.com/dvs0wjgcv/image/upload/v1729660207/p42gjrbqa3hisyocxg1p.png",
      productName: "Chunky Glyph Tee",
      productPrice: "120 000 ₮",
      category: "Tee",
      size: "m",
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

  const handleAddToCart = (image: any) => {
    const fetch = localStorage.getItem("cart") as string;
    const items = JSON.parse(fetch);
    if (items) {
      localStorage.setItem("cart", JSON.stringify([...items, image]));
    } else {
      localStorage.setItem("cart", JSON.stringify([image]));
    }
  };

  const filteredImages =
    filter?.length >= 1
      ? images.filter((image) => filterParam?.includes(image.category))
      : images;

  return (
    <div className="w-[774px] flex flex-wrap gap-y-12 gap-x-2 justify-between">
      {filteredImages.map((image, index) => {
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
                flexDirection: "column",
                gap: "8px",
                width: "245px",
              }}
            >
              <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden relative flex justify-end">
                <img
                  src={image.productImage}
                  className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                    isHover === index ? "scale-[1.2]" : ""
                  }`}
                  alt=""
                />
                <Link key={index} href={"/category"}>
                  <button
                    className="absolute top-[13px] right-[10px]"
                    onClick={() => handleAddToCart(image)}
                  >
                    <FavoriteBorderIcon sx={{ color: "black" }} />
                  </button>
                </Link>
              </div>
              <Stack>
                <Typography sx={{ fontSize: "16px" }}>
                  {image.productName}
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>{image.size}</Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  {image.productPrice}
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {image.category}
                </Typography>
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </div>
  );
};
