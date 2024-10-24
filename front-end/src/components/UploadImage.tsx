"use client";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Stack, Typography } from "@mui/material";

type UploadImageProps = {
  setImagesURL: Dispatch<SetStateAction<string[]>>;
  imagesURL: string[];
  images: (string | null)[];
  onImageChange: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
};

const UploadImage = ({
  setImagesURL,
  imagesURL,
  images,
  onImageChange,
}: UploadImageProps) => {
  // const [uploadImages, setUploadImages] = useState<File[]>([]);
  // const [images, setImages] = useState<(string | null)[]>([null, null, null]);
  // // const [imagesURL, setImagesURL] = useState<string[]>([]);

  // const cloud_name = "dvs0wjgcv";
  // const present_name = "tsagaanaa";
  // const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  // const handleImageUpload = async () => {
  //   try {
  //     await Promise.all(
  //       uploadImages.map(async (image) => {
  //         const formData = new FormData();
  //         formData.append("file", image);
  //         formData.append("upload_preset", present_name);
  //         const res = await axios.post(url, formData, {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         });
  //         setImagesURL((prev) => [...prev, res.data.secure_url]);
  //       })
  //     );
  //     setUploadImages([]);
  //     console.log(imagesURL);

  //     setImages([null, null, null]);
  //   } catch (error) {
  //     console.error("Image upload failed:", error);
  //   }
  // };
  // // zurag songohod frontend dr haruulj bui function

  // const onImageChange =
  //   (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
  //     if (event.target.files && event.target.files[0]) {
  //       const file = event.target.files[0];
  //       setUploadImages([...uploadImages, file]);

  //       const newImages = [...images];
  //       newImages[index] = URL.createObjectURL(event.target.files[0]);
  //       setImages(newImages);
  //     }
  //   };

  return (
    <div className="flex flex-col w-[563px] h-[213px] rounded-xl bg-[#f3e9e9] mt-6 ">
      <h1 className="flex text-lg font-semibold mt-6 ml-6 ">
        Бүтээгдэхүүний зураг
      </h1>
      <div className="flex flex-row  ml-6 gap-2">
        <div className="flex gap-2">
          {/* image ee maplaj bn */}
          {images.map((image, index) => (
            <div key={index}>
              <label key={index}>
                <input
                  type="file"
                  className="hidden"
                  onChange={onImageChange(index)}
                />
                <div className="border relative rounded-xl h-[125px] flex items-center justify-center w-[125px] border-[#D6D8DB] border-dashed mt-4">
                  <img src="/images.png" alt="" />
                  {image && (
                    <Image
                      src={image}
                      fill
                      className="absolute object-cover "
                      alt="image"
                    />
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>
        <button
          // onClick={handleImageUpload}
          className="w-[125px] h-[125px]  mt-4"
        >
          <img
            src="/Chip.png"
            alt=""
            className=" w-[32px] h-[32px] flex items-center justify-center ml-[44.5px] "
          />
        </button>
      </div>
    </div>
  );
};
export default UploadImage;
