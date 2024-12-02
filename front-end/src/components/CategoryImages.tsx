"use client";

import React, { useEffect, useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearch } from "@/provider/SearchProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const CategoryImages = () => {
  const router = useRouter();
  const { productData, setSavedProducts } = useSearch();
  const [isHover, setIsHover] = useState(Number);

  const hoverHandler = (i: number) => {
    setIsHover(i);
  };

  const hoverHandlerLeaver = (i: number) => {
    setIsHover(NaN);
  };

  const handleSave = (product: any) => {
    const isThereSavedItemsJson = window.localStorage.getItem("save");
    const isThereSavedItems = isThereSavedItemsJson
      ? JSON.parse(isThereSavedItemsJson)
      : [];

    const isThereExisting = isThereSavedItems.find(
      (el: any) => el._id === product._id
    );

    if (isThereExisting) {
      const updatedItems = isThereSavedItems.filter(
        (el: any) => el._id !== product._id
      );
      window.localStorage.setItem("save", JSON.stringify(updatedItems));
      setSavedProducts(updatedItems);
    } else {
      isThereSavedItems.push(product);
      window.localStorage.setItem("save", JSON.stringify(isThereSavedItems));
      setSavedProducts(isThereSavedItems);
    }
  };

  const [iconColors, setIconColors] = useState<boolean[]>(
    new Array(productData.length).fill(false)
  );

  const toggleIconColor = (index: number) => {
    setIconColors((prevColors) =>
      prevColors.map((color, i) => (i === index ? !color : color))
    );
  };

  const [isSaved, setIsSaved] = useState(false);

  const [filter, setFilter] = useState("");
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const filteredImages =
    filter?.length >= 1
      ? productData.filter((image) => filterParam?.includes(image.categoryName))
      : productData;

  useEffect(() => {
    setFilter(filterParam as string);
  }, [filterParam]);
  // aa
  return (
    <div className="w-[774px] flex flex-wrap gap-y-12 gap-x-2 z-0 ">
      {productData?.map((image, index) => {
        return (
          <Stack
            key={index}
            onMouseEnter={() => {
              hoverHandler(index);
            }}
            onMouseLeave={() => {
              hoverHandlerLeaver(index);
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "245px",
            }}
          >
            <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden relative flex justify-end z-0">
              <img
                onClick={() => {
                  router.push(`/productdetail/${image._id}`);
                }}
                src={image.images[0]}
                className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 cursor-pointer ${
                  isHover === index ? "scale-[1.2]" : ""
                }`}
                alt=""
              />

              <IconButton
                className="absolute top-[13px] right-[10px] z-10"
                onClick={() => {
                  handleSave(image);
                  toggleIconColor(index);
                  setIsSaved((prev) => !prev);
                }}
              >
                <FavoriteIcon
                  className="transition-colors duration-300 ease-in-out"
                  sx={{ color: iconColors[index] ? "black" : "white" }}
                />
              </IconButton>
            </div>
            <Stack>
              <Typography sx={{ fontSize: "16px" }}>
                {image.productName}
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                {image.price}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </div>
  );
};
