"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Stack, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CustomButton } from "./Button";

interface Product {
  _id: string;
  productName: string;
  price: string;
  quantity: number;
  images: string[];
  description: string;
}

interface CartsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  onNext: () => void;
}

const Carts: React.FC<CartsProps> = ({ products, setProducts, onNext }) => {
  const handleQuantityChange = (productId: string, isIncrement: boolean) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? {
              ...product,
              quantity: isIncrement
                ? product.quantity + 1
                : Math.max(product.quantity - 1, 1),
            }
          : product
      )
    );
  };

  const handleRemoveProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };

  const totalAmount = products.reduce(
    (total, product) => total + parseFloat(product.price) * product.quantity,
    0
  );

  return (
    <Box
      sx={{
        bgcolor: "primary.contrastText",
        m: 1,
        width: { xs: "100%", md: 638 },
        height: "664px",
        borderRadius: "16px",
        padding: "20px",
        border: "1px solid #E0E0E0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography color="primary.main" sx={{ fontSize: 24, mb: 2 }}>
        1. Сагс ({products.length})
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflowY: "auto",
        }}
      >
        {products.map((product) => (
          <Box
            key={product._id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              border: "1px solid #E0E0E0",
              borderRadius: "16px",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              {product.images.length > 0 ? (
                <img
                  style={{ borderRadius: "16px" }}
                  src={product.images[0]}
                  alt={product.productName}
                  width="100px"
                  height={100}
                />
              ) : (
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: "#E0E0E0",
                    borderRadius: "16px",
                  }}
                />
              )}
              <Stack>
                <Typography>{product.productName}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton
                    sx={{ borderRadius: "50%" }}
                    size="small"
                    color="primary"
                    onClick={() => handleQuantityChange(product._id, false)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{product.quantity}</Typography>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleQuantityChange(product._id, true)}
                  >
                    <AddIcon />
                  </IconButton>
                </Stack>
                <Typography variant="body2">{product.price}₮</Typography>
              </Stack>
            </Stack>
            <IconButton
              size="large"
              onClick={() => handleRemoveProduct(product._id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: 4 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Нийт төлөх дүн:</Typography>
          <Typography variant="h6">{totalAmount}₮</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton
            text="Худалдан авах"
            textColor="primary.contrastText"
            handleClick={onNext}
            bgColor="secondary.main"
            height="36px"
            border="secondary.main"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carts;
