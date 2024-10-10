"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Box, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      bgcolor={"primary.main"}
      sx={{
        display: "flex",
        position: "relative",
        bottom: 0,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Stack
        bgcolor={"primary.main"}
        color={"primary.contrastText"}
        gap="43px"
        sx={{
          width: "1040px",
          height: "282px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          flexDirection={"row"}
          sx={{ width: "1040px", justifyContent: "space-between" }}
        >
          <Stack sx={{ display: "flex", height: "34px", width: "52px" }}>
            <img src="./Pineconehome-Logo.png" alt="" />
          </Stack>
          <Stack flexDirection={"row"} sx={{ gap: "38px" }}>
            <Stack
              flexDirection={"row"}
              sx={{ gap: "20px", alignItems: "center" }}
            >
              <Stack
                sx={{
                  border: "solid 1px #353535",
                  height: "48px",
                  width: "48px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px",
                }}
              >
                {" "}
                <LocalPhoneIcon />
              </Stack>

              <Stack>(976) 7007-1234</Stack>
            </Stack>
            <Stack
              flexDirection={"row"}
              sx={{ gap: "20px", alignItems: "center" }}
            >
              <Stack
                sx={{
                  border: "solid 1px #353535",
                  height: "48px",
                  width: "48px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px",
                }}
              >
                {" "}
                <MailOutlineIcon />
              </Stack>
              <Stack>contact@ecommerce.mn</Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          bgcolor={"primary.contrastText"}
          sx={{ height: "1.5px", width: "1040px", opacity: "10%" }}
        ></Stack>
        <Stack
          flexDirection={"row"}
          sx={{ width: "1040px", justifyContent: "space-between" }}
        >
          <Stack>© 2024 Ecommerce MN</Stack>
          <Stack flexDirection={"row"} sx={{ gap: "26px" }}>
            {" "}
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
