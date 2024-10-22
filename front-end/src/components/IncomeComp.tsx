"use client";

import { Box, Stack, ImageList, Typography, Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CustomButton } from "./Button";

export const IncomeComp = () => {
  return (
    <div>
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
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
              Орлого
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
            ></Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
