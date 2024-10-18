"use client";
import { Button } from "@/components/ui/button";
import { Checkbox, Rating } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";

export const ProductDetail = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [selectedSize, setSelectedSize] = useState<string | null>("S");

  const sizes: string[] = ["S", "M", "L", "XL", "2XL"];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <div className="flex  items-center flex-col">
      <div className="flex justify-between w-[1040px]">
        <div>jijig zurags</div>
        <div>tom zurag</div>
        <div>
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
          <div className="mt-[100px]">
            <div className="flex w-[168px] h-[20px] gap-4 justify-center items-center">
              <div className="text-sm">Үнэлгээ</div>
              <Link
                className="text-sm underline text-blue-600"
                href="/productdetail"
              >
                бүгдийг харах
              </Link>
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
          </div>
        </div>
      </div>
      <div>holbootoi baraa</div>
    </div>
  );
};
