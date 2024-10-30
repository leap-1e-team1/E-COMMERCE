"use client";
import { Box, Input, Typography } from "@mui/material";
import { useState } from "react";
import { CustomButton } from "./Button";
import axios from "axios"; // Make sure to import axios

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  images: string[];
}

interface DeliveryProps {
  products: Product[];
  onNext: () => void;
  onBack: () => void;
}

const Delivery: React.FC<DeliveryProps> = ({ products, onNext, onBack }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleOrderSubmit = async () => {
    try {
      const res = await axios.post(`${process.env.BACKEND_URL}/order`, {
        surname,
        name,
        phone,
        address,
        additionalInfo,
        products,
      });

      console.log("Order submitted successfully:", res.data);
      onNext();
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: "20px", width: "1040px" }}>
      <Box
        sx={{
          bgcolor: "primary.contrastText",
          m: 1,
          width: { xs: "100%", md: 333 },
          height: "448px",
          borderRadius: "16px",
          padding: "20px",
          border: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography color="primary.main" sx={{ fontSize: 24, mb: 2 }}>
          1. Сагс ({products.length})
        </Typography>

        {products.map((product) => (
          <Box
            key={product.id}
            sx={{ mb: 2, display: "flex", alignItems: "center" }}
          >
            {product.images.length > 0 && (
              <img
                style={{
                  borderRadius: "16px",
                  marginRight: "10px",
                  width: "80px",
                  height: "80px",
                }}
                src={product.images[0]}
                alt={product.name}
              />
            )}
            <Box>
              <Typography sx={{ fontSize: "16px" }}>
                {product.description}
              </Typography>
              <Typography sx={{ flexGrow: 1, fontSize: "12px" }}>
                {product.quantity} x {product.price}₮
              </Typography>
            </Box>
          </Box>
        ))}

        <Typography variant="h6" sx={{ mt: 2 }}>
          Нийт төлөх дүн:{" "}
          {products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )}{" "}
          ₮
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "primary.contrastText",
          m: 1,
          width: { xs: "100%", md: 687 },
          borderRadius: "16px",
          padding: "32px",
          border: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          2. Хүргэлтийн мэдээлэл оруулах
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography>Овог:</Typography>
          <Input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            sx={{
              height: "28px",
              border: "1px solid #E0E0E0",
              borderRadius: "18px",
            }}
            disableUnderline
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography>Нэр:</Typography>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              height: "28px",
              border: "1px solid #E0E0E0",
              borderRadius: "18px",
            }}
            disableUnderline
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography>Утасны дугаар:</Typography>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
              height: "28px",
              border: "1px solid #E0E0E0",
              borderRadius: "18px",
            }}
            disableUnderline
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography>Хаяг:</Typography>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{
              height: "94px",
              border: "1px solid #E0E0E0",
              borderRadius: "18px",
            }}
            disableUnderline
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography>Нэмэлт мэдээлэл:</Typography>
          <Input
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            sx={{
              height: "66px",
              border: "1px solid #E0E0E0",
              borderRadius: "18px",
            }}
            disableUnderline
          />
        </Box>
        <Typography sx={{ fontSize: "13px", color: "#71717A" }}>
          Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <CustomButton
            text="Буцах"
            textColor="#111111"
            handleClick={onBack}
            bgColor="#fff"
            height="36px"
            border="secondary.main"
          />
          <CustomButton
            text="Үргэлжлүүлэх"
            textColor="primary.contrastText"
            handleClick={handleOrderSubmit} // Update to call the new function
            bgColor="secondary.main"
            height="36px"
            border="secondary.main"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
