"use client";

import React from "react";
import { Box, ImageList, Stack, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DiscountIcon from "@mui/icons-material/Discount";
import Link from "next/link";

export const LeftBar = () => {
  const routers = [
    {
      icon: <GridViewIcon />,
      title: "Хяналтын самбар",
      href: "/admin",
    },
    {
      icon: <ContentPasteIcon />,
      title: "Захиалга",
      href: "/admin/order",
    },
    {
      icon: <DiscountIcon />,
      title: "Орлого",
      href: "/admin/income",
    },
    {
      icon: <ListAltIcon />,
      title: "Бүтээгдэхүүн",
      href: "/admin/product",
    },
    {
      icon: <SettingsIcon />,
      title: "Тохиргоо",
      href: "/admin/settings",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "222px",
        height: "100vh",
        marginTop: "24px",
      }}
    >
      {routers.map(({ href, title, icon }) => (
        <Link href={href} key={title}>
          <Stack
            flexDirection={"row"}
            sx={{
              display: "flex",
              gap: "16px",
              color: "black",
              paddingLeft: "15px",
              bgcolor: ":hover",
              hover: "black",
            }}
          >
            <Typography> {icon}</Typography>
            <Typography> {title}</Typography>
          </Stack>
        </Link>
      ))}
    </Box>
  );
};
