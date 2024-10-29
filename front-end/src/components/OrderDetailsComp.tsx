import { Box, Stack } from "@mui/system";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import Link from "next/link";

export const OrderDetailsComp = () => {
  return (
    <Box bgcolor={"background.paper"} sx={{ width: "calc(100% - 222px)" }}>
      <Box
        bgcolor={"primary.contrastText"}
        sx={{ display: "flex", px: 5, py: 5, gap: 7 }}
      >
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
            border: "1px solid #D6D8DB",
          }}
        >
          <Stack
            flexDirection={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
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
              }}
            >
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
          <Stack
            flexDirection={"row"}
            bgcolor={"background.paper"}
            sx={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            <Stack sx={{ width: "210px", height: "100%" }}>
              <img src="/image.png" alt="" />
            </Stack>
            <Stack sx={{ gap: 5, p: 3, width: "399px" }}>
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
                sx={{ justifyContent: "space-between" }}
              >
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
          }}
        >
          <Box
            bgcolor={"primary.contrastText"}
            sx={{ borderRadius: "15px", border: "1px solid #D6D8DB" }}
          >
            <Typography sx={{ p: 5, borderBottom: "1px solid #D6D8DB" }}>
              Хүргэлтийн мэдээлэл
            </Typography>
            <Stack sx={{ px: 5, pb: 8, pt: 6 }}>
              <Typography>Гэр</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts
                6r darvar
              </Typography>
            </Stack>
          </Box>
          <Box
            bgcolor={"primary.contrastText"}
            sx={{ borderRadius: "15px", border: "1px solid #D6D8DB " }}
          >
            <Typography sx={{ p: 5, borderBottom: "1px solid #D6D8DB " }}>
              Төлбөрийн мэдээлэл
            </Typography>
            <Stack
              sx={{ mx: 5, py: 7, borderBottom: "1px solid #D6D8DB ", gap: 3 }}
            >
              <Typography>Бүтээгдэхүүн</Typography>
              <Stack
                flexDirection={"row"}
                sx={{ justifyContent: "space-between" }}
              >
                <Stack flexDirection={"row"}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    WOMEN'S HORSEBIT MULE Women’s horsebit mule...
                  </Typography>
                  <Typography>x2</Typography>
                </Stack>
                <Typography sx={{ fontWeight: "bold" }}>₮677,100</Typography>
              </Stack>
              <Stack
                flexDirection={"row"}
                sx={{ justifyContent: "space-between" }}
              >
                <Stack flexDirection={"row"}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    WOMEN'S HORSEBIT MULE Women’s horsebit mule...
                  </Typography>
                  <Typography>x1</Typography>
                </Stack>
                <Typography sx={{ fontWeight: "bold" }}>₮ 125,700</Typography>
              </Stack>
              <Stack
                flexDirection={"row"}
                sx={{ justifyContent: "space-between" }}
              >
                {" "}
                <Stack flexDirection={"row"} sx={{ gap: 83 }}>
                  <Typography>Хүргэлт</Typography>
                  <AirportShuttleOutlinedIcon />
                </Stack>
                <Typography sx={{ fontWeight: "bold" }}>₮ 5,000</Typography>
              </Stack>
            </Stack>
            <Stack
              flexDirection={"row"}
              sx={{ justifyContent: "space-between", px: 5, pt: 5, pb: 8 }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Нийт төлсөн дүн
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>₮807,800</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
