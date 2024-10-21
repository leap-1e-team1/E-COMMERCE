"use client";

import { Box, Stack, ImageList, Typography, Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CustomButton } from "./Button";

export const SettingsComp = () => {
  return (
    <Box bgcolor={"background.paper"} sx={{ width: "100%" }}>
      <Stack
        flexDirection={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "25px",
          marginTop: "5%",
        }}
      >
        <Stack
          bgcolor={"primary.contrastText"}
          flexDirection={"column"}
          sx={{
            width: "729px",
            borderRadius: "10px",
            display: "flex",
            paddingY: "16px",
            paddingX: "24px",
            ml: "15%",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Тохиргоо
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              px: "12px",
              py: "8px",
              alignItems: "center",
              justifyContent: "space-between",
              border: "solid",
              borderWidth: "1px",
              borderColor: "background.paper",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Баннер зураг </Typography>
            <Button
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                py: "8px",
                px: "16px",
                fontSize: "14px",
                fontWeight: "600",
                height: "36px",
                borderColor: "#D6D8DB",
                borderRadius: "8px",
              }}
            >
              солих
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              px: "12px",
              py: "8px",
              alignItems: "center",
              justifyContent: "space-between",
              border: "solid",
              borderWidth: "1px",
              borderColor: "background.paper",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>
              Эхний бүтээгдэхүүнээ нэмнэ үү
            </Typography>
            <Button
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                py: "8px",
                px: "16px",
                fontSize: "14px",
                fontWeight: "600",
                height: "36px",
                borderColor: "#D6D8DB",
                borderRadius: "8px",
              }}
            >
              Бүтээгдэхүүн нэмэх
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              px: "12px",
              py: "8px",
              alignItems: "center",
              justifyContent: "space-between",
              border: "solid",
              borderWidth: "1px",
              borderColor: "background.paper",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>
              Хүргэлтийг тохируулна уу{" "}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                py: "8px",
                px: "16px",
                fontSize: "14px",
                fontWeight: "600",
                height: "36px",
                borderColor: "#D6D8DB",
                borderRadius: "8px",
              }}
            >
              Хүргэлт тохируулах
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
