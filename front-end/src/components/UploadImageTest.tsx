import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, use, useState } from "react";

const UploadImageTest = () => {
  // huselt yvulah zuragnudin state
  const [uploadImages, setUploadImages] = useState<File[]>([]);

  // frontend deer harulah state
  const [images, setImages] = useState<(string | null)[]>([null, null, null]);

  const cloud_name = "dvs0wjgcv";
  const present_name = "tsagaanaa";
  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const handleImageUpload = async () => {
    // ene post huselt array deer yvuulna

    try {
      await Promise.all(
        uploadImages.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", present_name);
          await axios.post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        })
      );
      setUploadImages([]);
      setImages([null, null, null]);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  // zurag songohod urdaa harulj bui function
  const onImageChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        setUploadImages([...uploadImages, file]);

        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]);
        setImages(newImages);
      }
    };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <div className="flex gap-[67px]">
        {/* image ee maplaj bn */}
        {images.map((image, index) => (
          <div key={index}>
            <label key={index}>
              <input
                type="file"
                className="hidden"
                onChange={onImageChange(index)}
              />
              <div className="border relative rounded-sm h-[185px] flex items-center justify-center w-[185px] border-black">
                <h1>ADD IMAGE + </h1>
                {image && (
                  <Image
                    src={image}
                    fill
                    className="absolute object-cover"
                    alt="image"
                  />
                )}
              </div>
            </label>
          </div>
        ))}
      </div>
      <button className="px-2 py-1 border border-1" onClick={handleImageUpload}>
        Upload Image
      </button>
    </div>
  );
};

export default UploadImageTest;
