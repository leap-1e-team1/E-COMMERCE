"use client";

import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSearch } from "@/provider/SearchProvider";

export const CategoryImages = () => {
  const { productData } = useSearch();
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
      ? productData.filter((image) => filterParam?.includes(image.categoryName))
      : productData;

  useEffect(() => {
    setFilter(filterParam as string);
  }, [filterParam]);

  return (
    <div className="w-[774px] flex flex-wrap gap-y-12 gap-x-2 ">
      {productData?.map((image, index) => {
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
                  src={image.images[0]}
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
                {/* <Typography sx={{ fontSize: "14px" }}>{image.sizes}</Typography> */}
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  {image.price}
                </Typography>
                {/* <Typography sx={{ fontSize: "16px" }}>
                  {image.categoryName} */}
                {/* </Typography> */}
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </div>
  );
};
