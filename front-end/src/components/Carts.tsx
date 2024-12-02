"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Stack, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CustomButton } from "./Button";
import { CartedProductsType, useSearch } from "@/provider/SearchProvider";

interface CartsProps {
  products: CartedProductsType[];
  onNext: () => void;
}

const Carts: React.FC<CartsProps> = ({ products = [], onNext }) => {
  const { setCartedProducts } = useSearch();

  const handleQuantityChange = (productId: string, isIncrement: boolean) => {
    const cartedItems = localStorage.getItem("cartedItems");
    const items = cartedItems ? JSON.parse(cartedItems) : [];

    const existingItem = items.find((item: any) => item._id === productId);

    if (existingItem) {
      existingItem.quantity += isIncrement ? 1 : -1;
      if (existingItem.quantity < 1) {
        existingItem.quantity = 1;
      }
    }

    localStorage.setItem("cartedItems", JSON.stringify(items));
    setCartedProducts(items);
  };

  const handleRemoveProduct = (productId: string) => {
    const cartedItems = localStorage.getItem("cartedItems");
    const items = cartedItems ? JSON.parse(cartedItems) : [];

    const updatedItems = items.filter((item: any) => item._id !== productId);

    localStorage.setItem("cartedItems", JSON.stringify(updatedItems));
    setCartedProducts(updatedItems);
  };

  const totalAmount = (products || []).reduce(
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
        1. Сагс ({products?.length || 0})
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflowY: "auto",
        }}
      >
        {products?.map((product) => (
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
