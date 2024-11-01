"use client";

import { InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "@/provider/SearchProvider";

type SearchResponse = {
  foundProducts: ProductsModelType[];
};

export type ProductsModelType = {
  _id: string;
  productName: string;
  price: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  barcode: string;
  count: number;
  color: string;
  sizes: string[];
  categoryName: string;
  remainingQuantity: number;
  Subclass: string;
  type: string;
};

export const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const { setSearchedData } = useSearch();

  useEffect(() => {
    const productDatas = async () => {
      const { data } = await axios.post<SearchResponse>(
        "http://localhost:8000/search",
        {
          value: inputValue,
        }
      );
      setSearchedData(data?.foundProducts);
    };

    productDatas();
  }, [inputValue]);

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          gap: "8px",
          paddingX: "16px",
          paddingY: "8px",
          bgcolor: "#18181B",
          borderRadius: "20px",
          width: "300px",
          height: "40px",
        }}
      >
        <button>
          <SearchIcon sx={{ color: "white", alignItems: "center" }} />
        </button>
        <InputBase
          sx={{ color: "gray", alignItems: "center" }}
          placeholder="Бүтээгдэхүүн хайх"
          onChange={(e) => setInputValue(e.target.value)}
        ></InputBase>
        <Stack sx={{ paddingTop: "69px" }}>{/* <SearchInput /> */}</Stack>
      </Stack>
    </>
  );
};

// aa
