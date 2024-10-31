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
import axios from "axios";
import { useUser } from "@/provider/UserProvider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { CenterFocusStrong } from "@mui/icons-material";
import { useSearch } from "@/provider/SearchProvider";
interface CloudinaryUploadResponse {
  secure_url: string;
  token: string;
}



export const Header = () => {
  const { isLoggedIn } = useUser();
  const { savedProducts } = useSearch();

  const router = useRouter();

  const [user, setUser] = useState<string>("username");

  const usernameFetch = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await axios.get<CloudinaryUploadResponse>(
          `${process.env.BACKEND_URL}/username`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { firstName }: any = data;

        setUser(firstName);
      } catch (error: any) {
        const message = error.response?.data?.message || "error";
        throw new Error(message);
      }
    }
  };

  useEffect(() => {
    usernameFetch();
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

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
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <Link href="/savepage">
                  <FavoriteBorderIcon sx={{ color: "white" }} />
                </Link>
                {savedProducts.length <= 0 ? null : (
                  <div
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "-5px",
                      width: "17px",
                      height: "17px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {savedProducts.length}
                  </div>
                )}
              </div>
            </div>

            <Link href="/cart">
              <LocalGroceryStoreIcon sx={{ color: "white" }} />
            </Link>

            {isLoggedIn ? (
              <Stack
                flexDirection={"row"}
                sx={{
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/user"}>
                  <div className="text-white pr-2">{user}</div>
                </Link>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    size={"icon"}
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <FaRegUser className="text-white w-[24px] h-[24px]" />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <Link href={"/user"}>
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              </Stack>
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
