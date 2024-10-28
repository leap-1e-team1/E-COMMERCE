"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface ProductCategory {
  _id: string;
  url: string;
  images: string;
}

const ImageSelector = () => {
  const [images, setImages] = useState<ProductCategory[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      const response = await axios.get<ProductCategory[]>(
        "https://e-commerce-t6c9.onrender.com/imageavah"
      );

      if (Array.isArray(response.data)) {
        setImages(response.data);
        console.log(response.data[0].images);
      } else {
        alert("Unexpected response structure");
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Error fetching data";
      alert(`Error: ${message}`);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const selectImage = (url: string) => {
    setSelectedImage(url);
  };
  console.log(images);

  return (
    <div>
      <h1>Choose an Image</h1>
      {images.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((image) => (
            <div
              key={image._id}
              onClick={() => selectImage(image.images[0])}
              style={{
                margin: "10px",
                cursor: "pointer",
                border: selectedImage === image.url ? "2px solid blue" : "none",
              }}
            >
              <img src={image.images[0]} alt="Product" width={100} />
            </div>
          ))}
        </div>
      ) : (
        <p>No images available</p>
      )}
      {selectedImage && (
        <div>
          <h2>Selected Image</h2>
          <img src={selectedImage} alt="Selected" width={300} />
        </div>
      )}
    </div>
  );
};

export default ImageSelector;
