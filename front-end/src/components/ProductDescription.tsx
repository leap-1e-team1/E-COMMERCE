"use client";
import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Stack } from "@mui/material";
import { Input } from "@/components/Input";
import UploadImage from "./UploadImage";
import ProductCategory from "./ProductCategory";
import ProductSize from "./ProductSize";
import ProductAddColor from "./ProductAddColor";
import axios from "axios";

export const ProductDescription = () => {
  const [imagesURL, setImagesURL] = useState<string[]>([]);
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const [images, setImages] = useState<(string | null)[]>([null, null, null]);

  const cloud_name = "dvs0wjgcv";
  const upload_preset = "tsagaanaa";
  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const handleImageUpload = async (): Promise<string[]> => {
    try {
      const uploadedImageUrls = await Promise.all(
        uploadImages.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", upload_preset);

          const res = await axios.post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return res.data.secure_url;
        })
      );

      return uploadedImageUrls;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };

  const addProduct = async () => {
    try {
      const uploadedImageUrls = await handleImageUpload();
      const response = await axios.post(
        "http://localhost:8000/product",
        {
          images: uploadedImageUrls,
          selectedSize: "M",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Replace with your JWT key
          },
        }
      );

      // Clear uploaded images after successful product addition
      setImagesURL([]);
      setUploadImages([]);
      setImages([null, null, null]);

      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error while adding product:", error);
    }
  };

  // Handle image selection and display the preview in the frontend
  const onImageChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        setUploadImages((prev) => [...prev, file]);

        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]);
        setImages(newImages);
      }
    };

  return (
    <div className="flex flex-row">
      <div className="mt-8 ml-8 gap-6 flex flex-col">
        <div className="w-[563px] h-[312px] text-[#121316] border rounded-xl bg-[#e3d7d7] pt-6 pl-6">
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
              placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
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
        <UploadImage
          setImagesURL={setImagesURL}
          imagesURL={imagesURL}
          images={images}
          onImageChange={onImageChange}
        />
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
      <Button
        onClick={addProduct}
        className="bg-blue-600 w-[175px] hover:bg-blue-700 h-[36px] rounded-2xl"
      >
        Үнэлэх
      </Button>
    </div>
  );
};
