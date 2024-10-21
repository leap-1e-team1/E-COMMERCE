"use client";

import Box from "@mui/material/Box";
import { ImageList, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Search } from "./Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { CustomButton } from "./Button";
import { cursorTo } from "readline";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          position: "fixed",
          top: 0,
          bgcolor: "primary.main",
          gap: "12px",
          zIndex: 100,
          height: "68px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "1040px",
            justifyContent: "space-between",
            paddingLeft: "8px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"center"}
            sx={{ gap: "16px" }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Stack direction="row" alignItems="center" sx={{ gap: "12px" }}>
                <img className="w-[32px] h-[32px]" src="/Vector.png" alt="" />
                <Typography
                  style={{ cursor: "pointer" }}
                  sx={{ color: "primary.contrastText" }}
                >
                  E-COMMERCE
                </Typography>
              </Stack>
            </Link>
            <Link style={{ textDecoration: "none" }} href="./">
              <Typography sx={{ color: "primary.contrastText" }}>
                АНГИЛАЛ
              </Typography>
            </Link>
          </Stack>
          <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
            <Search />
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ gap: "18px" }}>
            <FavoriteBorderIcon sx={{ color: "white" }} />
            <LocalGroceryStoreIcon sx={{ color: "white" }} />
            <Link href="/register">
              <Button className=" w-[101px] border-[1px] border-blue-600 hover:border-blue-700  h-[36px] rounded-2xl">
                Бүртгүүлэх
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-blue-600 w-[82px] hover:bg-blue-700 h-[36px] rounded-3xl">
                Нэвтрэх
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
