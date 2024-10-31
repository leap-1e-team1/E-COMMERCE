"use client";
import { Stack, Box, Typography } from "@mui/material";
import Savebox from "./Savebox";
import { useEffect, useState } from "react";

const Savecomp: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getSavedItemsJson = window.localStorage.getItem("save");
    const getSavedItems = getSavedItemsJson
      ? JSON.parse(getSavedItemsJson)
      : [];

    setProducts(getSavedItems);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "672px",
          height: "472px",
          marginTop: "120px",
          marginBottom: "209px",
          gap: "16px",
        }}
      >
        <Typography>Хадгалсан бараа({products.length})</Typography>
        <Savebox products={products} setProducts={setProducts} />
      </Box>
    </Box>
  );
};

export default Savecomp;
