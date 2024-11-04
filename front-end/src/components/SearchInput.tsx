"use client";

import { useSearch } from "@/provider/SearchProvider";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export const SearchInput = ({ product }: { product: any[] }) => {
  const { setSearchedData } = useSearch();

  const searchHide = () => {
    setSearchedData([]);
  };

  return (
    <>
      <Stack
        // alignItems="center"
        // justifyContent="center"
        direction={"column"}
        sx={{
          width: "601px",
          bgcolor: "#FFFFFF",
          borderRadius: "16px",
          padding: "32px",
          gap: "16px",
          position: "fixed",
          height: "432px",
          overflow: "scroll",
        }}
      >
        {product?.map(({ productName, price, images, _id }, index) => {
          return (
            <Link
              onClick={searchHide}
              key={index}
              href={`/productdetail/${_id}`}
            >
              <Stack
                direction={"row"}
                sx={{
                  gap: "16px",
                  top: "69px",
                  left: "408px",
                }}
              >
                <img
                  src={images[0]}
                  alt=""
                  className="rounded w-[80px] h-[80px] object-cover"
                />

                <Stack direction={"column"} sx={{ gap: "4px" }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                    {productName}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                    {price}
                  </Typography>
                </Stack>
              </Stack>
            </Link>
          );
        })}
      </Stack>
    </>
  );
};
