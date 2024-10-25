"use client";

import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const IncomeComp = () => {
  return (
    <Box
      flexDirection={"column"}
      bgcolor={"background.paper"}
      sx={{ width: "100%", display: "flex", alignItems: "center", gap: "15px" }}
    >
      <Box
        bgcolor={"primary.contrastText"}
        sx={{
          width: "724px",
          marginTop: "15px",
          borderRadius: "10px",
          border: "1px solid #D6D8DB ",
        }}
      >
        <Stack
          flexDirection={"row"}
          sx={{
            justifyContent: "space-between",
            paddingX: "20px",
            paddingY: "20px",
            alignItems: "center",
            borderBottom: "1px solid #D6D8DB ",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Орлого
          </Typography>
          <Stack
            bgcolor={"background.paper"}
            flexDirection={"row"}
            sx={{
              gap: "10px",
              paddingX: "15px",
              paddingY: "10px",
              borderRadius: "10px",
            }}
          >
            <SaveAltIcon />
            <Typography sx={{ fontWeight: "bold" }}>Хуулга татах</Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          sx={{
            justifyContent: "space-between",
            borderColor: "#D6D8DB",
            paddingX: "20px",
            paddingY: "20px",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
            235,000₮
          </Typography>
          <Stack
            flexDirection={"row"}
            sx={{ gap: "8px", alignItems: "center" }}
          >
            <Button
              sx={{
                bgcolor: "#18BA51",
                width: "94px",
                height: "36px",
                fontWeight: "bold",
                boxShadow: "none",
              }}
              variant="contained"
            >
              Өнөөдөр
            </Button>
            <Button
              sx={{
                height: "36px",
                width: "82px",
                border: "1px solid #D6D8DB ",
              }}
            >
              7 хоног
            </Button>
            <Stack
              flexDirection={"row"}
              sx={{
                alignItems: "center",
                gap: "10px",
                width: "132px",
                height: "36px",
                border: "1px solid #D6D8DB ",
                borderRadius: "5px",
                paddingX: "15px",
              }}
            >
              <CalendarTodayOutlinedIcon sx={{ fontSize: "18px" }} />
              <Typography>Сараар</Typography>
              <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        bgcolor={"primary.contrastText"}
        sx={{ borderRadius: "10px", border: "1px solid #D6D8DB " }}
      >
        <Stack
          flexDirection={"row"}
          sx={{ paddingY: "15px", borderBottom: "1px solid #D6D8DB  " }}
        >
          <Typography
            sx={{ width: "169px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Захиалгын ID дугаар
          </Typography>
          <Typography
            sx={{ width: "268px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Захиалагч
          </Typography>
          <Typography
            sx={{ width: "137px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Төлбөр
          </Typography>
          <Typography
            sx={{ width: "150px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Огноо
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} sx={{ paddingY: "15px" }}>
          <Typography
            sx={{
              width: "169px",
              fontSize: "13px",
              fontWeight: "bold",
              paddingLeft: "15px",
            }}
          >
            #12345678
          </Typography>
          <Stack sx={{ width: "268px", paddingLeft: "15px" }}>
            <Typography sx={{ fontSize: "13px" }}>
              Zoloosoko0526@gmail.com
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>88556061</Typography>
          </Stack>
          <Typography
            sx={{ width: "137px", fontSize: "13px", paddingLeft: "15px" }}
          >
            12,000₮
          </Typography>
          <Typography
            sx={{ width: "150px", fontSize: "13px", paddingLeft: "15px" }}
          >
            2024-01-10
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
