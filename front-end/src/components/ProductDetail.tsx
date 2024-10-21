"use client";
import { Button } from "@/components/ui/button";
import { Checkbox, Rating } from "@mui/material";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";

export const ProductDetail = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [selectedSize, setSelectedSize] = useState<string | null>("S");

  const sizes: string[] = ["S", "M", "L", "XL", "2XL"];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const [height, setHeight] = useState(60);

  const increaseHeight = () => {
    setHeight((prevHeight) => prevHeight + 330);
  };
  const [add, setAdd] = useState([]);
  const addReview = () => {
    setAdd(add);
  };
  return (
    <div className="flex items-center mt-[20px] gap-[80px] flex-col ">
      <div className="flex gap-5 items-start justify-between w-[1040px]">
        <div className="h-[400px] w-[67px] mt-[100px] flex flex-col gap-2">
          <img className="w-[67px] h-[67px]" src="ProductDetail.png" alt="" />
          <img className="w-[67px] h-[67px]" src="ProductDetail.png" alt="" />
          <img className="w-[67px] h-[67px]" src="ProductDetail.png" alt="" />
          <img className="w-[67px] h-[67px]" src="ProductDetail.png" alt="" />
        </div>
        <img className="w-[421px] h-[521px]" src="ProductDetail.png" alt="" />
        <div className="flex flex-col mt-[100px]">
          <div className="flex flex-col gap-2">
            <div className="w-[52px] h-[20px] justify-center rounded-full border-blue-600 flex items-center border-[1px] text-xs font-semibold">
              Шинэ
            </div>
            <div className="flex w-[256px] h-[40px] gap-2 justify-between items-center">
              <div className="text-2xl font-bold">Wildflower Hoodie</div>
              <button className="text-2xl">
                <CiHeart />
              </button>
            </div>
            <div className="w-[418px] h-[24px] font-normal">
              Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div>Хэмжээний заавар</div>
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
            <div className="font-bold text-xl">120’000₮</div>
            <Button className="bg-blue-600 w-[175px] hover:bg-blue-700 h-[36px] rounded-2xl">
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

      <img src="Category.png" alt="" />
    </div>
  );
};
