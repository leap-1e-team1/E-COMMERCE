"use client";

import { Box, Stack, ImageList, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const DashboardComp = () => {
  return (
    <Box bgcolor={"background.paper"} sx={{ width: "100%" }}>
      <Stack
        flexDirection={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          paddingX: "25px",
          marginTop: "35px",
        }}
      >
        <Stack
          bgcolor={"primary.contrastText"}
          flexDirection={"column"}
          sx={{
            width: "100%",
            height: "136px",
            borderRadius: "10px",
            display: "flex",
            paddingY: "16px",
            paddingX: "24px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            <AttachMoneyIcon />
            <Typography sx={{ fontWeight: "bold" }}>Орлого</Typography>
          </Box>
          <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
            235,000₮
          </Typography>
          <Typography sx={{ opacity: "60%" }}>Өнөөдөр</Typography>
        </Stack>
        <Box
          bgcolor={"primary.contrastText"}
          flexDirection={"column"}
          sx={{
            width: "100%",
            height: "136px",
            borderRadius: "10px",
            display: "flex",
            paddingY: "16px",
            paddingX: "24px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            <ContentPasteIcon />
            <Typography sx={{ fontWeight: "bold" }}>Захиалга</Typography>
          </Box>
          <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
            58
          </Typography>
          <Typography sx={{ opacity: "60%" }}>Өнөөдөр</Typography>
        </Box>
      </Stack>
      <Stack
        flexDirection={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          paddingX: "25px",
          marginTop: "35px",
        }}
      >
        <Stack
          bgcolor={"primary.contrastText"}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            paddingY: "16px",
            paddingX: "24px",
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              marginBottom: "30px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Шилдэг бүтээгдэхүүн
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
          </Stack>
          <Box
            bgcolor={"background.paper"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingY: "15px",
              paddingX: "30px",
              fontWeight: "bold",
              borderBottom: "1px solid",
            }}
          >
            <Typography>№</Typography>
            <Typography>Бүтээгдэхүүн</Typography>
            <Typography>Зарагдсан</Typography>
            <Typography>Үнэ</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: "15px",
              paddingX: "30px",
              borderBottom: "1px solid",
            }}
          >
            <Typography>1</Typography>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  WOMEN'S HORSEBIT MULE
                </Typography>
                <Typography>#12345678</Typography>
              </Box>
            </Box>
            <Typography>200</Typography>
            <Typography>12,000₮</Typography>
          </Box>
        </Stack>
        <Box
          bgcolor={"primary.contrastText"}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            display: "flex",
            paddingY: "16px",
            paddingX: "24px",
            justifyContent: "space-between",
          }}
        ></Box>
      </Stack>
    </Box>
  );
};
