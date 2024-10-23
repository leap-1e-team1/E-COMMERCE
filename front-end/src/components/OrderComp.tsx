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

export const OrderComp = () => {
  return (
    <Box bgcolor={"background.paper"} sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          paddingY: "20px",
          paddingX: "20px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Бүгд</Typography>
        <Typography>Шинэ захиалага</Typography>
        <Typography>Бэлтгэгдэж байна</Typography>
        <Typography>Хүргэлтэнд гарсан</Typography>
        <Typography>Хүргэгдсэн</Typography>
        <Typography>Цуцлагдсан</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginY: "25px",
          marginX: "30px",
          justifyContent: "space-between",
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
          borderRadius: "10px",
          marginX: "30px",
          border: "1px solid",
          borderColor: "#D6D8DB",
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: "20px",
            paddingY: "20px",
          }}
        >
          Захиалга
        </Typography>
        <Stack
          bgcolor={"background.paper"}
          flexDirection={"row"}
          sx={{
            paddingX: "20px",
            paddingY: "15px",
          }}
        >
          <Typography sx={{ width: "191px", fontSize: "13px" }}>
            Захиалгын ID дугаар
          </Typography>
          <Typography sx={{ width: "310px", fontSize: "13px" }}>
            Үйлчлүүлэгч
          </Typography>
          <Typography sx={{ width: "168px", fontSize: "13px" }}>
            Огноо
          </Typography>
          <Typography sx={{ width: "129px", fontSize: "13px" }}>Цаг</Typography>
          <Typography sx={{ width: "137px", fontSize: "13px" }}>
            Төлбөр
          </Typography>
          <Typography sx={{ width: "214px", fontSize: "13px" }}>
            Статус
          </Typography>
          <Typography
            sx={{
              width: "191px",
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
            paddingX: "20px",
            alignItems: "center",
            paddingY: "15px",
          }}
        >
          <Typography sx={{ width: "191px", fontSize: "13px" }}>
            #12345678
          </Typography>
          <Stack sx={{ width: "310px", fontSize: "13px" }}>
            <Typography>Zoloo soko</Typography>
            <Typography>Zoloosoko@gmail.com</Typography>
          </Stack>
          <Typography sx={{ width: "168px", fontSize: "13px" }}>
            2023-01-09
          </Typography>
          <Typography sx={{ width: "129px", fontSize: "13px" }}>
            10:58
          </Typography>
          <Typography sx={{ width: "137px", fontSize: "13px" }}>
            12,000₮
          </Typography>
          <Stack sx={{ width: "214px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                padding: "10px",
                bgcolor: "#C1E6CF",
                width: "fit-content",
                borderRadius: "30px",
              }}
            >
              {" "}
              Хүргэгдсэн
            </Typography>
          </Stack>

          <ArrowForwardIosIcon
            sx={{
              width: "191px",
              fontSize: "15px",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};
