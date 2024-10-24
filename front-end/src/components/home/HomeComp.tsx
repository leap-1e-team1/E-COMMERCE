"use client";

import { Image } from "@mui/icons-material";

import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

import { useState } from "react";

export const HomeComp = () => {
  const [coverImage, setCoverImage] = useState(
    "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792"
  );

  const products = [
    {
      productName: " The Prompt Magazine1",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine2",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine3",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine4",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine5",
      productPrice: "120’000$",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine6",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine7",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine8",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine9",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine10",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine11",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine12",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine13",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine14",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine15",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine16",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine17",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
    },
    {
      productName: " The Prompt Magazine18",
      productPrice: "120’000₮",
      productImg:
        "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792",
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
    <Stack
      gap={"16px"}
      direction={"column"}
      sx={{ width: "100vw" }}
      alignItems={"center"}
    >
      <Stack alignItems={"center"}>
        <img
          src={coverImage}
          alt=""
          className="w-screen h-[474px] object-cover object-top"
        />
        <Box position={"absolute"} width={"1040px"} gap={"8px"} top={"390px"}>
          <Typography sx={{ fontSize: "18px" }}>Wildflower Hoodie</Typography>
          <Typography sx={{ fontSize: "36px", fontWeight: "700" }}>
            120’000₮
          </Typography>
        </Box>
      </Stack>
      <Stack
        width={"1040px"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "50px",
          mb: "90px",
        }}
      >
        {products.map(({ productName, productPrice, productImg }, index) => {
          if (index < 4) {
            return (
              <Link
                key={index}
                href={"/productdetail"}
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
                      src={productImg}
                      className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                        isHover === index ? "scale-[1.2]" : ""
                      }`}
                      alt=""
                    />
                  </div>

                  <Stack>
                    <Typography sx={{ fontSize: "16px" }}>
                      {productName}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                      {productPrice}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>
            );
          }
        })}
        <Stack
          width={"508px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: "50px",
          }}
        >
          {products.map(({ productName, productPrice, productImg }, index) => {
            if (index >= 4 && index < 6) {
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
                        src={productImg}
                        className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                    </div>

                    <Stack>
                      <Typography sx={{ fontSize: "16px" }}>
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {productPrice}
                      </Typography>
                    </Stack>
                  </Stack>
                </Link>
              );
            }
            if (index == 6) {
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
                      width: "508px",
                    }}
                  >
                    <div className="w-[508px] h-[692px] rounded-2xl overflow-hidden">
                      <img
                        src={productImg}
                        className={`object-cover w-[508px] h-[692px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                    </div>

                    <Stack>
                      <Typography sx={{ fontSize: "16px" }}>
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {productPrice}
                      </Typography>
                    </Stack>
                  </Stack>
                </Link>
              );
            }
          })}
        </Stack>
        <Stack
          width={"508px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: "50px",
          }}
        >
          {products.map(({ productName, productPrice, productImg }, index) => {
            if (index === 7) {
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
                      width: "508px",
                    }}
                  >
                    <div className="w-[508px] h-[692px] rounded-2xl overflow-hidden">
                      <img
                        src={productImg}
                        className={`object-cover w-[508px] h-[692px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                    </div>

                    <Stack>
                      <Typography sx={{ fontSize: "16px" }}>
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {productPrice}
                      </Typography>
                    </Stack>
                  </Stack>
                </Link>
              );
            }
            if (index > 7 && index < 10) {
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
                        src={productImg}
                        className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                    </div>

                    <Stack>
                      <Typography sx={{ fontSize: "16px" }}>
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {productPrice}
                      </Typography>
                    </Stack>
                  </Stack>
                </Link>
              );
            }
          })}
        </Stack>
        {products.map(({ productName, productPrice, productImg }, index) => {
          if (index > 9 && index < 18) {
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
                      src={productImg}
                      className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                        isHover === index ? "scale-[1.2]" : ""
                      }`}
                      alt=""
                    />
                  </div>

                  <Stack>
                    <Typography sx={{ fontSize: "16px" }}>
                      {productName}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                      {productPrice}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};
