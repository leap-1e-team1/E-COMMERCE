"use client";

import Box from "@mui/material/Box";
import { ImageList, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Search } from "./Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Button } from "@/components/ui/button";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUser } from "@/provider/UserProvider";

export const Header = () => {
  const router = useRouter();
  const { isLoggedIn } = useUser();

  return (
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
          <Stack direction="row" alignItems="center" sx={{ gap: "6px" }}>
            <ImageList
              sx={{ alignItems: "center", width: "32px", height: "27.39px" }}
            >
              <img src="/Vector.png" alt="" />
            </ImageList>
            <Link href="/">
              <Typography
                style={{ cursor: "pointer" }}
                sx={{ color: "primary.contrastText" }}
              >
                E-COMMERCE
              </Typography>
            </Link>
          </Stack>

          <Link style={{ textDecoration: "none" }} href="/category">
            <Typography sx={{ color: "primary.contrastText" }}>
              АНГИЛАЛ
            </Typography>
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ gap: "18px" }}>
          <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
            <Search />
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ gap: "18px" }}>
            <Link href="/savepage">
              <FavoriteBorderIcon sx={{ color: "white" }} />
            </Link>

            <Link href="/cart">
              <LocalGroceryStoreIcon sx={{ color: "white" }} />
            </Link>

            {isLoggedIn ? (
              <Link href={"/user"}>
                <PermIdentityIcon sx={{ color: "white" }} />
              </Link>
            ) : (
              <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
                <Link href="/register">
                  <Button className=" w-[101px] border-[1px] text-white border-blue-600 hover:border-blue-700  h-[36px] rounded-2xl">
                    Бүртгүүлэх
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="bg-blue-600 w-[82px] text-white hover:bg-blue-700 h-[36px] rounded-3xl">
                    Нэвтрэх
                  </Button>
                </Link>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
