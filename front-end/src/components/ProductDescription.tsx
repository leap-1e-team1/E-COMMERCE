"use client";
import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Stack } from "@mui/material";
import { Input } from "@/components/Input";
import UploadImage from "./UploadImage";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";

interface CloudinaryUploadResponse {
  secure_url: string;
  name: string;
}

export const ProductDescription = () => {
  const [imagesURL, setImagesURL] = useState<string[]>([]);
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const [images, setImages] = useState<(string | null)[]>([null, null, null]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState({
    productname: "",
    Nemelt: "",
    barcode: "",
    price: "",
    selectedSize: "",
    productName: "",
    description: "",
    remainingQuantity: "",
    Subclass: "",
    color: "",
    images: "",
    type: "",
    category: "",
  });

  const sizes: string[] = ["S", "M", "L", "XL", "2XL"];

  const handleSizeSelect = (size: string) => {
    setSelectedSizes(
      (prev) =>
        prev.includes(size)
          ? prev.filter((s) => s !== size) // Remove size if it's already selected
          : [...prev, size] // Add size if it's not selected
    );
  };

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

          const res = await axios.post<CloudinaryUploadResponse>(
            url,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          return res.data.secure_url;
        })
      );

      return uploadedImageUrls;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setInputValue((prev) => ({ ...prev, category: value }));
  };

  const handleSubCategoryChange = (value: string) => {
    setInputValue((prev) => ({ ...prev, Subclass: value }));
  };

  const handleColorChange = (value: string) => {
    setInputValue((prev) => ({ ...prev, color: value }));
  };

  const addProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Check if all required fields are filled
    const {
      productname,
      Nemelt,
      barcode,
      price,
      remainingQuantity,
      category,
      Subclass,
      color,
      type,
    } = inputValue;

    if (
      !productname ||
      !Nemelt ||
      !barcode ||
      !price ||
      !remainingQuantity ||
      !category ||
      !Subclass ||
      !color ||
      !type
    ) {
      toast.error("All fields are required"); // Show toast if any required field is empty
      return; // Exit the function if validation fails
    }

    setSelectedSizes([]); // Reset selected sizes

    try {
      const uploadedImageUrls = await handleImageUpload();
      const response = await axios.post(
        "http://localhost:8000/product",
        {
          images: uploadedImageUrls,
          productName: productname,
          description: Nemelt,
          selectedSizes,
          barcode,
          price,
          remainingQuantity,
          categoryName: category,
          Subclass,
          color,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );

      setImagesURL([]);
      setUploadImages([]);
      setImages([null, null, null]);
      setInputValue({
        productname: "",
        Nemelt: "",
        barcode: "",
        price: "",
        selectedSize: "S",
        productName: "",
        description: "",
        remainingQuantity: "",
        Subclass: "",
        color: "",
        images: "",
        type: "",
        category: "",
      });
      toast.success("Product added successfully");

      console.log("Product added successfully:", category);
    } catch (error) {
      console.error("Error while adding product:", error);
      toast.error("Failed to add product");
    }
  };

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
        <div className="w-[563px] h-[312px] text-[#121316] border rounded-xl bg-[white] pt-6 pl-6">
          <h1 className="text-sm font-semibold">Бүтээгдэхүүний нэр</h1>
          <Stack
            sx={{
              width: "515px",
              height: "44px",
              paddingTop: "8px",
            }}
          >
            <Input
              value={inputValue.productname}
              name="productname"
              label="Нэр"
              placeholder="Нэр"
              helperText=""
              inputHandler={inputHandler}
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
              value={inputValue.Nemelt}
              name="Nemelt"
              label=""
              placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
              helperText=""
              inputHandler={inputHandler}
            />
          </Stack>
          <h1 className="text-sm font-semibold">Барааны код</h1>
          <Stack
            sx={{
              width: "515px",
              height: "44px",
              paddingTop: "8px",
            }}
          >
            <Input
              value={inputValue.barcode}
              name="barcode"
              label=""
              placeholder="#12345678"
              helperText=""
              inputHandler={inputHandler}
            />
          </Stack>
        </div>
        <UploadImage
          setImagesURL={setImagesURL}
          imagesURL={imagesURL}
          images={images}
          onImageChange={onImageChange}
        />
        <div className="flex flex-row gap-4 text-sm font-semibold text-[#121316] w-[563px] h-[132px] bg-[white] pt-6 pl-6 border rounded-xl mt-6">
          <div className="flex flex-col gap-2">
            <h1>Үндсэн үнэ</h1>
            <Stack sx={{ width: "249.5px", height: "56px", paddingTop: "8px" }}>
              <Input
                value={inputValue.price}
                name="price"
                label=""
                placeholder="Үндсэн үнэ"
                helperText=""
                inputHandler={inputHandler}
              />
            </Stack>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Үлдэгдэл тоо ширхэг</h1>
            <Stack sx={{ width: "249.5px", height: "56px", paddingTop: "8px" }}>
              <Input
                value={inputValue.remainingQuantity}
                name="remainingQuantity"
                label=""
                placeholder="Үлдэгдэл тоо ширхэг"
                helperText=""
                inputHandler={inputHandler}
              />
            </Stack>
          </div>
        </div>
      </div>
      <div>
        <Stack
          sx={{
            paddingTop: "24px",
            paddingLeft: "24px",
            width: "573px",
            height: "232px",
            borderRadius: "8px",
            bgcolor: "#fff",
            gap: "12px",
            marginTop: "34px",
            marginLeft: "26px",
          }}
        >
          <p className="font-bold text-sm">Ерөнхий ангилал</p>
          <Select
            onValueChange={handleCategoryChange}
            name="categoryName"
            value={inputValue.category}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сонгох" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Юу байх юм</SelectItem>
                <SelectItem value="banana">Юу байх юм</SelectItem>
                <SelectItem value="blueberry">Юу байх юм</SelectItem>
                <SelectItem value="grapes">Юу байх юм</SelectItem>
                <SelectItem value="pineapple">Юу байх юм</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="font-bold text-sm">Дэд ангилал</p>

          <Select
            onValueChange={handleSubCategoryChange}
            name="Subclass"
            value={inputValue.Subclass}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сонгох" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Юу байх юм</SelectItem>
                <SelectItem value="banana">Юу байх юм</SelectItem>
                <SelectItem value="blueberry">Юу байх юм</SelectItem>
                <SelectItem value="grapes">Юу байх юм</SelectItem>
                <SelectItem value="pineapple">Юу байх юм</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Stack>
        <Stack
          sx={{
            paddingTop: "24px",
            paddingLeft: "24px",
            width: "573px",
            height: "232px",
            borderRadius: "8px",
            bgcolor: "#fff",
            gap: "12px",
            marginTop: "34px",
            marginLeft: "26px",
          }}
        >
          <p className="font-bold text-xl">Төрөл</p>

          <div className="flex w-[176px] gap-1 h-[32px]">
            {sizes.map((size) => (
              <Button
                key={size}
                onClick={(e) => {
                  e.preventDefault();
                  handleSizeSelect(size);
                }}
                className={`w-8 h-8 rounded-full border-[1px] flex items-center justify-center text-xs
            ${
              selectedSizes.includes(size)
                ? "bg-black text-white"
                : "bg-white border-gray-400 text-black"
            }`}
              >
                {size}
              </Button>
            ))}
          </div>
          <Select
            onValueChange={handleColorChange}
            name="color"
            value={inputValue.color}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сонгох" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Юу байх юм</SelectItem>
                <SelectItem value="banana">Юу байх юм</SelectItem>
                <SelectItem value="blueberry">Юу байх юм</SelectItem>
                <SelectItem value="grapes">Юу байх юм</SelectItem>
                <SelectItem value="pineapple">Юу байх юм</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Stack>
        <Stack
          sx={{
            paddingTop: "24px",
            paddingLeft: "24px",
            width: "573px",
            height: "218px",
            borderRadius: "8px",
            bgcolor: "#fff",
            gap: "12px",
            marginTop: "34px",
            marginLeft: "26px",
          }}
        >
          <p className="font-bold text-xl">Таг</p>

          <Stack className="w-[510px] h-[44px]">
            <Input
              value={inputValue.type}
              name="type"
              label=""
              placeholder="Таг нэмэх..."
              helperText=""
              inputHandler={inputHandler}
            />
          </Stack>
          <p className="mt-4 text-sm text-gray-400">
            Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
          </p>
        </Stack>
        <Button
          onClick={addProduct}
          className="bg-black w-[121px] hover:bg-slate-950 mt-8 ml-[472px] text-white h-[56px] rounded-xl"
        >
          Нийтлэх
        </Button>
      </div>
    </div>
  );
};
