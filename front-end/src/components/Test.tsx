import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const AddProductForm: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files); // Save the selected files
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("selectedSize", selectedSize);
    images.forEach((image) => {
      formData.append("images", image); // Append each image file
    });

    try {
      const token = localStorage.getItem("token"); // Assuming you have a JWT stored in localStorage
      const response = await axios.post("/api/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Specify that you're sending form data
        },
      });
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Size:
        <input
          type="text"
          value={selectedSize}
          onChange={handleSizeChange}
          required
        />
      </label>
      <label>
        Images:
        <input type="file" multiple onChange={handleImageChange} required />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
