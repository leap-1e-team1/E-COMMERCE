"use client";
import axios from "axios";
import { useState } from "react";

interface ProductCategory {
  images: string;
}

const Category1 = () => {
  const [asd, setAsd] = useState<ProductCategory[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get<ProductCategory[]>(
        "http://localhost:8000/imageavah"
      );

      if (Array.isArray(response.data)) {
        setAsd(response.data);
      } else {
        alert("Unexpected response structure");
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Error fetching data";
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="mt-[200px]">
      <button onClick={handleSubmit}>asd</button>
      {asd.map((el, index) => (
        <img key={index} src={el.images} />
      ))}
    </div>
  );
};

export default Category1;
