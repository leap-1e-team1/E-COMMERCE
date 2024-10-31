import { Stack, Box, Typography, Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { useState } from "react";
import { useSearch } from "@/provider/SearchProvider";

type ItemsType = {
  _id: string;
  productName: string;
  price: string;
  images: [string];
};

type SaveBoxProps = {
  products: ItemsType[];
  setProducts: React.Dispatch<React.SetStateAction<ItemsType[]>>;
};

const Savebox: React.FC<SaveBoxProps> = ({ products, setProducts }) => {
  const { setSavedProducts } = useSearch();

  const handleAddToCart = (index: number) => {
    console.log(`Added ${products[index].productName} to cart`);
  };

  const handleRemoveProduct = (productId: String) => {
    const isThereSavedItemsJson = window.localStorage.getItem("save");
    const isThereSavedItems = isThereSavedItemsJson
      ? JSON.parse(isThereSavedItemsJson)
      : [];
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
    const updatedItems = isThereSavedItems.filter(
      (el: any) => el._id !== productId
    );
    window.localStorage.setItem("save", JSON.stringify(updatedItems));
    setSavedProducts(updatedItems);
  };

  const [iconColors, setIconColors] = useState<boolean[]>(
    new Array(products.length).fill(false)
  );

  const toggleIconColor = (index: number) => {
    setIconColors((prevColors) =>
      prevColors.map((color, i) => (i === index ? !color : color))
    );
  };

  return (
    <Stack
      sx={{
        width: "622px",
        height: "132px",
        borderRadius: "16px",
        padding: "16px",
        gap: "24px",
      }}
    >
      {products.map(({ _id, productName, price, images }, index) => (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #ECEDF0",
            padding: "16px",
            gap: "24px",
          }}
          key={index}
        >
          <Stack sx={{ width: "100px", height: "100px" }}>
            <img
              src={images[0]}
              alt={productName}
              style={{ width: "100px", height: "100px" }}
            />
          </Stack>
          <Stack
            sx={{
              width: "402px",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Typography variant="h6">{productName}</Typography>
            <Typography variant="body1">{price}</Typography>
            <Button
              sx={{ width: "81px", borderRadius: "14px", height: "28px" }}
              variant="contained"
              color="secondary"
              onClick={() => handleAddToCart(index)}
            >
              сагслах
            </Button>
          </Stack>
          <IconButton
            sx={{ width: "20px", height: "20px" }}
            onClick={() => {
              handleRemoveProduct(_id);
              toggleIconColor(index);
            }}
          >
            <FavoriteIcon sx={{ color: "black" }} />
          </IconButton>
        </Stack>
      ))}
    </Stack>
  );
};

export default Savebox;
