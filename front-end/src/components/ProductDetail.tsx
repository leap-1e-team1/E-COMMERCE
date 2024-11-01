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
  _id: string;
  productName: string;
  description: string;
  barcode: string;
  price: string;
  images: [string];
  sizes: [string];
};

export const ProductDetail = ({ id }: { id: string }) => {
  console.log(id);

  const [products, setProducts] = useState([]);

  const [value, setValue] = React.useState<number | null>(2);
  const [selectedSize, setSelectedSize] = useState<string | null>("S");
  const router = useRouter();

  // const sizes: string[] = ["S", "M", "L", "XL", "2XL"];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    console.log(selectedSize);
  };

  const [height, setHeight] = useState(62);

  const increaseHeight = () => {
    setHeight((prevHeight) => prevHeight + 330);
  };

  const [product, setProduct] = useState<productType>();
  const [coverImg, setCoverImg] = useState<string | undefined>();
  const [imgHover, setImageHover] = useState(0);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const { data }: any = await axios.get(
          `${process.env.BACKEND_URL}/productDetail/${id}`
        );
        setProduct(data.product);
        setCoverImg(data.product.images[0]);
      } catch (error: any) {
        const message = error.response?.data?.message || "Error login";
        alert(message);
        console.log(error);
      }
    };
    handleSubmit();
    const handleSubmitProduct = async () => {
      try {
        const { data }: any = await axios.get(
          "http://localhost:8000/product",
          {}
        );
        setProducts(data);
        console.log(data);
      } catch (error: any) {
        const message = error.response?.data?.message || "Error login";
        alert(message);
        console.log(error);
      }
    };
    handleSubmitProduct();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!product) {
      console.error("No product found to add to cart");
      return;
    }

    try {
      const cartedItems = localStorage.getItem("cartedItems");
      const items = cartedItems ? JSON.parse(cartedItems) : [];

      const existingItem = items.find((item: any) => item._id === product._id);
      `      console.log(existingItem, "EXISTINMG");`;

      if (existingItem) {
        const quantityToAdd = 1;
        existingItem.quantity += quantityToAdd;
        console.log("Increased quantity of product in cart:", existingItem);
      } else {
        const newItem = {
          ...product,
          quantity: 1,
        };
        items.push(newItem);
        console.log("Product added to cart:", newItem);
      }
      ("");
      localStorage.setItem("cartedItems", JSON.stringify(items));
    } catch (error: any) {
      const message = error.response?.data?.message || "Error signing up";
      alert(message);
    }
  };

  const [isHover, setIsHover] = useState(Number);

  const hoverHandler = (i: number) => {
    setIsHover(i);
  };
  const hoverHandlerLeaver = (i: number) => {
    setIsHover(NaN);
  };

  const imgHandler = (e: number) => {
    setImageHover(e);
    if (product?.images[e]) {
      // Ensure the image exists
      setCoverImg(product.images[e]);
    }
  };

  return (
    <div className="flex items-center mt-[150px] gap-[80px] flex-col ">
      <div className="flex gap-5 items-start justify-between w-[1040px]">
        <div className="h-[400px] w-[67px] mt-[100px] flex flex-col gap-2">
          {product?.images.map((el, index) => {
            return (
              <img
                onClick={() => {
                  imgHandler(index);
                }}
                key={index}
                className={`w-[67px] object-cover h-[67px] rounded-[4px]  ${
                  imgHover == index ? "border border-[black]" : ""
                }`}
                src={el}
                alt=""
              />
            );
          })}
        </div>
        <img
          className="w-[421px] object-cover rounded-[16px] h-[521px]"
          src={coverImg}
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
              {product?.sizes.map((el, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeSelect(el)}
                  className={`w-8 h-8 rounded-full border-[1px] flex items-center justify-center text-xs
              ${
                selectedSize === el
                  ? "bg-black text-white"
                  : "bg-white border-gray-400 text-black"
              }
            `}
                >
                  {el}
                </button>
              ))}
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="font-bold text-xl">{product?.price}$</div>
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
            justifyContent: "start",
            flexWrap: "wrap",
            rowGap: "50px",
            gap: "21px",
            mb: "90px",
          }}
        >
          {products.map(({ _id, productName, price, images }, index) => {
            if (index < 8) {
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
                    <div className="w-[245px] h-[331px] rounded-2xl overflow-hidden">
                      <img
                        src={images[0]}
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
                        {price}
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
