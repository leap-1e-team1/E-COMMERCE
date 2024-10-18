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
            <Link href="/">
              <Stack direction="row" alignItems="center" sx={{ gap: "6px" }}>
                <ImageList sx={{ width: "32px", height: "27.39px" }}>
                  <img src="/Vector.png" alt="" />
                </ImageList>
                <Typography
                  style={{ cursor: "pointer", textDecoration: "none" }}
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
          <Stack direction="row" alignItems="center" sx={{ gap: "24px" }}>
            <FavoriteBorderIcon sx={{ color: "white" }} />
            <LocalGroceryStoreIcon sx={{ color: "white" }} />
            {/* <PersonOutlineIcon sx={{color:"white"}}/> */}

            <Link href="/register">
              <CustomButton
                text="Бүртгүүлэх"
                textColor="background.paper"
                handleClick={() => console.log("Button clicked!")}
                bgColor="primary.main"
                hoverColor="secondary.main"
                height="36px"
                border="secondary.main"
              />
            </Link>
            <Link href="/login">
              <CustomButton
                text="Нэвтрэх"
                textColor="background.paper"
                handleClick={() => console.log("Button clicked!")}
                bgColor="secondary.main"
                hoverColor="secondary.main"
                height="36px"
                border="secondary.main"
              />
            </Link>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
