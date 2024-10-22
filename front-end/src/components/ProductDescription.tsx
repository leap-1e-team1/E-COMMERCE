"use client";
import React, { useState } from "react";

import { Button, Stack, Typography } from "@mui/material";
import { Input } from "@/components/Input";
import UploadImage from "./UploadImage";
import ProductCategory from "./ProductCategory";
import ProductSize from "./ProductSize";
import ProductAddColor from "./ProductAddColor";
import ProductAddSize from "./ProductAddSize";
import { BorderColor } from "@mui/icons-material";

export const ProductDescription = () => {
  const handleClick = () => {
    console.log("btn");
  };

  const [productName, setProductName] = useState("");

  const nameHandler = (e: any) => {
    setProductName(e.target.value);
  };
  return (
    <div className="flex flex-row">
      <div className="mt-8  gap-6 flex flex-col">
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
              inputHandler={(e: any) => {
                nameHandler(e);
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
      <div className="flex flex-col ml-[26px]">
        <Stack
          sx={{
            width: "573px",
            height: "232px",
            borderRadius: "8px",
            bgcolor: "#e3d7d7",
            gap: "12px",
            marginTop: "34px",
          }}
        >
          <ProductCategory />
          <ProductSize />
        </Stack>
        <Stack
          sx={{
            width: "575px",
            height: "248px",
            bgcolor: "#e3d7d7",
            borderRadius: "8px",
            marginTop: "24px",

            paddingTop: "12px",
            paddingLeft: "24px",
          }}
        >
          <h1 className="text-lg font-semibold">Төрөл</h1>
          <ProductAddColor />
          <ProductAddSize />
          <Button
            variant="contained"
            onClick={() => {
              handleClick();
            }}
            sx={{
              backgroundColor: "white",
              color: "#121316",
              height: "46px",
              width: "180px",
              fontSize: "14px",
              fontWeight: "400",
              marginTop: "36px",
              marginLeft: "24px",

              "&:hover": {
                backgroundColor: "hoverColor",
              },
              border: "1px solid",
              borderColor: "#DBD9D2",
            }}
          >
            {"Төрөл нэмэх"}
          </Button>
        </Stack>
        <div className=" mt-12 w-[575px] h-[195px] border rounded-xl bg-[#e3d7d7] pt-6 pl-6  ">
          <h1>Таг</h1>
          <Stack
            sx={{
              width: "527px",
              height: "58px",
              fontSize: "18px",
              fontWeight: "400",
              marginTop: "8px",
            }}
          >
            <Input
              label=""
              placeholder="Таг нэмэх..."
              helperText=""
              inputHandler={(e: any) => {
                nameHandler(e);
              }}
            />
          </Stack>

          <p className="text-sm font-normal text-[#5E6166] mt-2">
            Санал болгох: Гутал , Цүнх , Эмэгтэй
          </p>
        </div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            marginLeft: "320px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              handleClick();
            }}
            sx={{
              backgroundColor: "white",
              color: "#121316",
              height: "56px",
              width: "113px",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "36px",

              "&:hover": {
                backgroundColor: "hoverColor",
              },
              border: "1px solid",
              borderColor: "#DBD9D2",
            }}
          >
            {"Ноорог"}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleClick();
            }}
            sx={{
              backgroundColor: "#121316",
              color: "white",
              height: "56px",
              width: "113px",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "36px",

              "&:hover": {
                backgroundColor: "hoverColor",
              },
              border: "1px solid",
              borderColor: "#DBD9D2",
            }}
          >
            {"Нийтлэх"}
          </Button>
        </Stack>
      </div>
    </div>
  );
};
