import { Box, Stack } from "@mui/system";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

export const OrderDetailsComp = () => {
  return (
    <Box bgcolor={"background.paper"} sx={{ width: "calc(100% - 222px)" }}>
      <Box
        bgcolor={"primary.contrastText"}
        sx={{ display: "flex", px: 5, py: 5, gap: 7 }}>
        <Link href={"/admin/order"}>
          <ArrowBackIosIcon />
        </Link>

        <Typography>Захиалгын дэлгэрэнгүй</Typography>
      </Box>
      <Box sx={{ display: "flex", p: 7, gap: 7 }}>
        <Box
          bgcolor={"primary.contrastText"}
          sx={{
            width: "50%",
            height: "100vh",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            p: 5,
            gap: 5,
          }}>
          <Stack
            flexDirection={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Stack>
              <Typography>Захиалгын ID дугаар: </Typography>
              <Typography sx={{ fontWeight: "bold" }}>#12345678</Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              sx={{
                gap: 3,
                py: 2,
                px: 3,
                bgcolor: "#ECEDF0",
                borderRadius: "20px",
              }}>
              <Typography>Бэлтгэгдэж байна</Typography>
              <ArrowDropDownIcon />
            </Stack>
          </Stack>
          <Stack>
            <Typography>Захиалагч: Хувь хүн </Typography>
            <Stack flexDirection={"row"}>
              <Typography sx={{ fontWeight: "bold" }}>
                Solongo Zoloo-
              </Typography>
              <Typography>Zoloosoko0526@gmail.com, 88556061 </Typography>
            </Stack>
          </Stack>
          <Stack flexDirection={"row"}>
            <Stack sx={{ width: "180px", height: "100vh" }}>
              <img src="/image.png" alt="" />
            </Stack>
            <Stack bgcolor={"background.paper"} sx={{ gap: 7, p: 5 }}>
              <Stack sx={{ gap: 5 }}>
                <Typography sx={{ fontWeight: "bold ", fontSize: 20 }}>
                  WOMEN'S HORSEBIT MULE
                </Typography>
                <Stack>
                  <Typography>2024-01-20</Typography>
                  <Typography>Бүтээгдэхүүний ID: 30349049903</Typography>
                </Stack>
              </Stack>
              <Stack
                flexDirection={"row"}
                sx={{ justifyContent: "space-between" }}>
                <Stack flexDirection={"row"}>
                  <Typography>Тоо ширхэг: 1</Typography>
                  <Typography>* ₮125,700</Typography>
                </Stack>
                <Typography> ₮125,700</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: 7,
          }}>
          <Box bgcolor={"primary.contrastText"} sx={{ borderRadius: "15px" }}>
            ergw
          </Box>
          <Box bgcolor={"primary.contrastText"} sx={{ borderRadius: "15px" }}>
            erre
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
