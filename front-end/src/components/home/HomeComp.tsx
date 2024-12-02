"use client";

import { IconButton, Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSearch } from "@/provider/SearchProvider";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const HomeComp = () => {
  const [coverImage, setCoverImage] = useState(
    "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_1000x.jpg?v=1719342792"
  );

  const [product, setProduct] = useState([]);

  const { productData, setSavedProducts } = useSearch();

  const router = useRouter();

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const { data }: any = await axios.get(
          `${process.env.BACKEND_URL}/product`,
          {}
        );
        setProduct(data);
      } catch (error: any) {
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
        {product.map((el: any, index) => {
          if (index < 4) {
            return (
              <Stack
                key={index}
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
                  <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex  justify-end  relative z-0">
                    <img
                      onClick={() => {
                        router.push(`/productdetail/${el._id}`);
                      }}
                      src={el.images[0]}
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
                        top: "505px",
                      }}
                    >
                      <FavoriteBorderIcon sx={{ color: "white" }} />
                    </Button>

                  </div>

                  <Stack>
                    <Typography sx={{ fontSize: "16px" }}>
                      {el.productName}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                      {el.price} ₮
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
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
                <Stack
                  key={index}
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
                    <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex justify-end relative z-0">
                      <img
                        onClick={() => {
                          router.push(`/productdetail/${_id}`);
                        }}
                        src={images[0]}
                        className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                      <IconButton
                        className="absolute top-[13px] right-[10px] z-10"
                        onClick={() => {
                          handleSave({ _id, productName, price, images });
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
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            }
            if (index == 6) {
              return (
                <Stack
                  key={index}
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
                    <div className="w-[508px] h-[692px] rounded-2xl overflow-hidden relative z-0">
                      <img
                        src={images[0]}
                        onClick={() => {
                          router.push(`/productdetail/${_id}`);
                        }}
                        className={`object-cover w-[508px] h-[692px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                      <IconButton
                        className="absolute top-[13px] right-[10px] z-10"
                        onClick={() => {
                          handleSave({ _id, productName, price, images });
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
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
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
                <Stack
                  key={index}
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
                    <div className="w-[508px] h-[692px] rounded-2xl overflow-hidden relative z-0">
                      <img
                        onClick={() => {
                          router.push(`/productdetail/${_id}`);
                        }}
                        src={images[0]}
                        className={`object-cover w-[508px] h-[692px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                      <IconButton
                        className="absolute top-[13px] right-[10px] z-10"
                        onClick={() => {
                          handleSave({ _id, productName, price, images });
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
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            }
            if (index > 7 && index < 10) {
              return (
                <Stack
                  key={index}
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
                    <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex justify-end relative z-0">
                      <img
                        onClick={() => {
                          router.push(`/productdetail/${_id}`);
                        }}
                        src={images}
                        className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                          isHover === index ? "scale-[1.2]" : ""
                        }`}
                        alt=""
                      />
                      <IconButton
                        className="absolute top-[13px] right-[10px] z-10"
                        onClick={() => {
                          handleSave({ _id, productName, price, images });
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
                        {productName}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                        {price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            }
          })}
        </Stack>
        {product.map(({ _id, productName, price, images }, index) => {
          if (index > 9 && index < 18) {
            return (
              <Stack
                key={index}
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
                  <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden flex justify-end relative z-0">
                    <img
                      onClick={() => {
                        router.push(`/productdetail/${_id}`);
                      }}
                      src={images[0]}
                      className={`object-cover w-[245px] h-[331px] rounded-2xl transition duration-300 ${
                        isHover === index ? "scale-[1.2]" : ""
                      }`}
                      alt=""
                    />
                    <IconButton
                      className="absolute top-[13px] right-[10px] z-10"
                      onClick={() => {
                        handleSave({ _id, productName, price, images });
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
                      {productName}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                      {price}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};
