"use client";

import { Image } from "@mui/icons-material";

import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useEffect, useState } from "react";

export const HomeComp = () => {
  const [coverImage, setCoverImage] = useState(
    "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792"
  );

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const { data }: any = await axios.get(
          "http://localhost:8000/product",
          {}
        );
        setProduct(data);
        console.log(data);
      } catch (error: any) {
        const message = error.response?.data?.message || "Error login";
        alert(message);
        console.log(error);
      }
    };
    handleSubmit();
  }, []);

  const [isHover, setIsHover] = useState(Number);

  const hoverHandler = (i: number) => {
    setIsHover(i);
  };
  const hoverHandlerLeaver = (i: number) => {
    setIsHover(NaN);
  };

  const productClickHandler = (e: any) => {
    console.log(e);
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
        {product.map(({ _id, productName, price, images }, index) => {
          if (index < 4) {
            return (
              <Link
                key={index}
                href={`/productdetail/${_id}`}
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
                  <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex justify-end">
                    <img
                      src={images[0]}
                      className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                        isHover === index ? "scale-[1.2]" : ""
                      }`}
                      alt=""
                    />
                    <Button
                      sx={{
                        position: "absolute",
                        width: "24px",
                        height: "24px",
                        top: "575px",
                      }}
                    >
                      <FavoriteBorderIcon sx={{ color: "black" }} />
                    </Button>
                  </div>

                  <Stack>
                    <Typography sx={{ fontSize: "16px" }}>
                      {productName}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                      {price}
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
          {product.map(({ _id, productName, price, images }, index) => {
            if (index >= 4 && index < 6) {
              return (
                <Link
                  key={index}
                  href={`/productdetail/${_id}`}
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
                    <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex justify-end">
                      <img
                        src={images[0]}
                        className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                      <Button
                        sx={{
                          width: "24px",
                          height: "24px",
                          position: "absolute",
                          top: "1010px",
                        }}
                      >
                        <FavoriteBorderIcon sx={{ color: "black" }} />
                      </Button>
                    </div>

                    <Stack>
                      <Typography sx={{ fontSize: "16px" }}>
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {price}
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
                  href={`/productdetail/${_id}`}
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
                        src={images[0]}
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
                        {price}
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
          {product.map(({ _id, productName, price, images }, index) => {
            if (index === 7) {
              return (
                <Link
                  key={index}
                  href={`/productdetail/${_id}`}
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
                        src={images[0]}
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
                        {price}
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
                  href={`/productdetail/${_id}`}
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
                    <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex justify-end">
                      <img
                        src={images}
                        className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                      <Button
                        sx={{
                          width: "24px",
                          height: "24px",
                          position: "absolute",
                          top: "1810px",
                        }}
                      >
                        <FavoriteBorderIcon sx={{ color: "black" }} />
                      </Button>
                    </div>

                    <Stack>
                      <Typography sx={{ fontSize: "16px" }}>
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Link>
              );
            }
          })}
        </Stack>
        {product.map(({ _id, productName, price, images }, index) => {
          if (index > 9 && index < 18) {
            return (
              <Link
                key={index}
                href={`/productdetail/${_id}`}
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
                  <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex justify-end">
                    <img
                      src={images[0]}
                      className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                        isHover === index ? "scale-[1.2]" : ""
                      }`}
                      alt=""
                    />
                    <Button
                      sx={{
                        width: "24px",
                        height: "24px",
                        position: "absolute",
                        top: "2300px",
                      }}
                    >
                      <FavoriteBorderIcon sx={{ color: "black" }} />
                    </Button>
                    <Button
                      sx={{
                        width: "24px",
                        height: "24px",
                        position: "absolute",
                        top: "2738px",
                      }}
                    >
                      <FavoriteBorderIcon sx={{ color: "black" }} />
                    </Button>
                  </div>

                  <Stack>
                    <Typography sx={{ fontSize: "16px" }}>
                      {productName}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                      {price}
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
