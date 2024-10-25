"use client";
import { Button } from "@/components/ui/button";
import { Checkbox, Rating, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Stack } from "@mui/system";
import Link from "next/link";

type productType = {
  productName: string;
  description: string;
  price: string;
  images: [string];
};

export const ProductDetail = ({ id }: { id: string }) => {
  console.log(id);

  const [value, setValue] = React.useState<number | null>(2);
  const [selectedSize, setSelectedSize] = useState<string | null>("S");
  const router = useRouter();

  const sizes: string[] = ["S", "M", "L", "XL", "2XL"];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const [height, setHeight] = useState(62);

  const increaseHeight = () => {
    setHeight((prevHeight) => prevHeight + 330);
  };
  const [product, setProduct] = useState<productType>();

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const { data }: any = await axios.get(
          `http://localhost:8000/productDetail/${id}`
        );
        setProduct(data.product);
      } catch (error: any) {
        const message = error.response?.data?.message || "Error login";
        alert(message);
        console.log(error);
      }
    };
    handleSubmit();
  }, []);

  console.log(product);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/product", {
        selectedSize,
      });

      router.push("/");
    } catch (error: any) {
      const message = error.response?.data?.message || "Error signing up";
      alert(message);
    }
  };

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
    <div className="flex items-center mt-[150px] gap-[80px] flex-col ">
      <div className="flex gap-5 items-start justify-between w-[1040px]">
        <div className="h-[400px] w-[67px] mt-[100px] flex flex-col gap-2">
          {product?.images.map((el, index) => {
            return (
              <img
                key={index}
                className="w-[67px] object-cover h-[67px] rounded-[4px]"
                src={el}
                alt=""
              />
            );
          })}
        </div>
        <img
          className="w-[421px] object-cover rounded-[16px] h-[521px]"
          src={product?.images[0]}
          alt=""
        />
        <div className="flex flex-col mt-[100px]">
          <div className="flex flex-col gap-2">
            <div className="w-[52px] h-[20px] justify-center rounded-full border-blue-600 flex items-center border-[1px] text-xs font-semibold">
              Шинэ
            </div>
            <div className="flex w-[256px] h-[40px] gap-2 justify-between items-center">
              <div className="text-2xl font-bold">{product?.productName}</div>
              <button className="text-2xl">
                <CiHeart />
              </button>
            </div>
            <div className="w-[438px] h-[24px] font-normal">
              {product?.description}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex ">Хэмжээний заавар</div>
            <div className="flex w-[176px] gap-1 h-[32px]">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`w-8 h-8 rounded-full border-[1px] flex items-center justify-center text-xs
              ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-white border-gray-400 text-black"
              }
            `}
                >
                  {size}
                </button>
              ))}
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="font-bold text-xl">{product?.price}</div>
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 w-[175px] text-white hover:bg-blue-700 h-[36px] rounded-2xl"
            >
              Сагсанд нэмэх
            </Button>
          </div>
          <div
            style={{ height: `${height}px` }}
            className="flex flex-col max-h-[1200px] mt-[55px] overflow-hidden gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="text-sm">Үнэлгээ</div>
              <button
                className="text-blue-600 underline"
                onClick={increaseHeight}
              >
                бүгдийг харах
              </button>
            </div>
            <div>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="w-[511px] h-[300px] p-4 gap-4 items-start  flex flex-col justify-start bg-gray-100 rounded-2xl">
              <div className="flex flex-col gap-2">
                <p>Одooр үнэлэх</p>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              <p>Сэтгэгдэл үлдээх:</p>
              <textarea
                className="w-[463px] h-[94px] p-2"
                placeholder="Энд бичнэ үү"
              ></textarea>
              <Button className="bg-blue-600 w-[175px] hover:bg-blue-700 h-[36px] rounded-2xl">
                Үнэлэх
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="text-2xl font-bold">Холбоотой бараа</div>
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
            if (index > 9 && index < 18) {
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
        </Stack>
      </div>
    </div>
  );
};
