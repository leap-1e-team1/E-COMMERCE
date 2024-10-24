"use client";

import { Box, Typography } from "@mui/material";

import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const OrderComp = () => {
  return (
    <Box
      bgcolor={"background.paper"}
      sx={{ width: "calc(100% - 222px)", px: 8 }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          width: "100%",
          borderBottom: "1px solid #D6D8DB ",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            pl: 5,
            borderBottom: "2px solid ",
            paddingY: "20px",
          }}
        >
          Бүгд
        </Typography>
        <Typography
          sx={{ borderBottom: "1px solid #D6D8DB ", paddingY: "20px" }}
        >
          Шинэ захиалага
        </Typography>
        <Typography
          sx={{ borderBottom: "1px solid #D6D8DB ", paddingY: "20px" }}
        >
          Бэлтгэгдэж байна
        </Typography>
        <Typography
          sx={{ borderBottom: "1px solid #D6D8DB ", paddingY: "20px" }}
        >
          Хүргэлтэнд гарсан
        </Typography>
        <Typography
          sx={{ borderBottom: "1px solid #D6D8DB ", paddingY: "20px" }}
        >
          Хүргэгдсэн
        </Typography>
        <Typography
          sx={{ borderBottom: "1px solid #D6D8DB ", paddingY: "20px" }}
        >
          Цуцлагдсан
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginY: "25px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button
            sx={{ bgcolor: "#18BA51", fontWeight: "bold", boxShadow: "none" }}
            variant="contained"
          >
            Өнөөдөр
          </Button>
          <Button sx={{ borderColor: "#D6D8DB" }} variant="outlined">
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

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 302,
            height: "36px",
            boxShadow: "none",
            border: "1px solid",
            borderColor: "#D6D8DB",
            bgcolor: "white",
          }}
        >
          <IconButton
            type="button"
            sx={{ p: "10px", color: "#121316" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Дугаар, Имэйл" />
        </Paper>
      </Box>
      <Box
        bgcolor={"primary.contrastText"}
        sx={{
          width: "100%",
          marginY: "25px",
          border: "1px solid #D6D8DB ",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: "20px",
            paddingY: "20px",
            borderBottom: "1px solid #D6D8DB ",
          }}
        >
          Захиалга
        </Typography>
        <Stack
          flexDirection={"row"}
          bgcolor={"background.paper"}
          sx={{
            paddingY: "15px",
            paddingLeft: "5px",
            justifyContent: "space-between",
            borderBottom: "1px solid",
            borderColor: "#D6D8DB",
          }}
        >
          <Typography
            sx={{ width: "191px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Захиалгын ID дугаар
          </Typography>
          <Typography
            sx={{ width: "209px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Үйлчлүүлэгч
          </Typography>
          <Typography
            sx={{ width: "168px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Огноо
          </Typography>
          <Typography
            sx={{ width: "129px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Цаг
          </Typography>
          <Typography
            sx={{ width: "137px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Төлбөр
          </Typography>
          <Typography
            sx={{ width: "214px", fontSize: "13px", paddingLeft: "15px" }}
          >
            Статус
          </Typography>
          <Typography
            sx={{
              width: "122px",
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Дэлгэрэнгүй
          </Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          sx={{
            alignItems: "center",
            paddingY: "15px",
            paddingLeft: "5px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ width: "191px", fontSize: "13px", paddingLeft: "15px" }}
          >
            #12345678
          </Typography>
          <Stack sx={{ width: "209px", paddingLeft: "15px" }}>
            <Typography sx={{ fontSize: "13px" }}>Zoloo soko</Typography>
            <Typography sx={{ fontSize: "13px" }}>
              Zoloosoko@gmail.com
            </Typography>
          </Stack>
          <Typography
            sx={{ width: "168px", fontSize: "13px", paddingLeft: "15px" }}
          >
            2023-01-09
          </Typography>
          <Typography
            sx={{ width: "129px", fontSize: "13px", paddingLeft: "15px" }}
          >
            10:58
          </Typography>
          <Typography
            sx={{ width: "137px", fontSize: "13px", paddingLeft: "15px" }}
          >
            12,000₮
          </Typography>
          <Stack sx={{ width: "214px", paddingLeft: "15px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                bgcolor: "#C1E6CF",
                paddingY: "5px",
                paddingX: "10px",
                width: "fit-content",
                borderRadius: "30px",
              }}
            >
              12,000₮
            </Typography>
          </Stack>
          <ArrowForwardIosIcon
            sx={{ width: "122px", fontSize: "13px", paddingLeft: "15px" }}
          />
        </Stack>
      </Box>
    </Box>
  );
};
