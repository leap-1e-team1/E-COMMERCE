"use client";
import React from "react";

import { Stack, Typography } from "@mui/material";
import { Input } from "@/components/Input";
import UploadImage from "./UploadImage";
import ProductCategory from "./ProductCategory";
import ProductSize from "./ProductSize";
import ProductAddColor from "./ProductAddColor";

export const ProductDescription = () => {
  return (
    <div className="flex flex-row">
      <div className="mt-8 ml-8 gap-6 flex flex-col">
        <div className="w-[563px] h-[312px] text-[#121316]  border rounded-xl bg-[#e3d7d7] pt-6 pl-6">
          <h1 className="text-sm font-semibold">Бүтээгдэхүүний нэр</h1>
          <Stack
            sx={{
              width: "515px",
              height: "44px",
              paddingTop: "8px",
            }}
          >
            <Input
              label="Нэр"
              placeholder="Нэр"
              helperText=""
              inputHandler={() => {
                console.log();
              }}
            />
          </Stack>
          <h1 className="text-sm font-semibold mt-8">Нэмэлт мэдээлэл</h1>
          <Stack
            sx={{
              width: "515px",
              height: "72px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            <Input
              label=""
              placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг
             онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
              helperText=""
              inputHandler={() => {
                console.log();
              }}
            />
          </Stack>
          <h1 className="text-sm font-semibold">Барааны код</h1>
          <Stack sx={{ width: "515px", height: "44px", paddingTop: "8px" }}>
            <Input
              label=""
              placeholder="#12345678"
              helperText=""
              inputHandler={() => {
                console.log();
              }}
            />
          </Stack>
        </div>
        <UploadImage />
        <div className="flex flex-row gap-4 text-sm font-semibold text-[#121316] w-[563px] h-[132px] bg-[#e3d7d7] pt-6 pl-6 border rounded-xl mt-6">
          <div className="flex flex-col gap-2">
            <h1>Үндсэн үнэ</h1>
            <Stack sx={{ width: "249.5px", height: "56px", paddingTop: "8px" }}>
              <Input
                label=""
                placeholder="Үндсэн үнэ"
                helperText=""
                inputHandler={() => {
                  console.log();
                }}
              />
            </Stack>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Үлдэгдэл тоо ширхэг</h1>
            <Stack sx={{ width: "249.5px", height: "56px", paddingTop: "8px" }}>
              <Input
                label=""
                placeholder="Үлдэгдэл тоо ширхэг"
                helperText=""
                inputHandler={() => {
                  console.log();
                }}
              />
            </Stack>
          </div>
        </div>
      </div>
      <Stack
        sx={{
          width: "573px",
          height: "232px",
          borderRadius: "8px",
          bgcolor: "#e3d7d7",
          gap: "12px",
          marginTop: "34px",
          marginLeft: "26px",
        }}
      >
        <ProductCategory />
        <ProductSize />
        <ProductAddColor />
      </Stack>
    </div>
  );
};
