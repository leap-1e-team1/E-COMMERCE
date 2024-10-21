"use client";

import { Box, ImageList, Stack, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export const AdminHeaderComp = () => {
  return (
    <Box
      bgcolor={"primary.main"}
      flexDirection={"row"}
      sx={{
        display: "flex",
        justifyContent: "space-between ",
        alignItems: "center",
        paddingX: "35px",
        top: 0,
        height: "48px",
      }}
    >
      <ImageList sx={{ display: "flex", height: "24px", width: "32px" }}>
        <img src="/Pineconehome-Logo.png" alt="" />
      </ImageList>
      <Stack
        color={"primary.contrastText"}
        flexDirection={"row"}
        sx={{ gap: "20px" }}
      >
        <Typography>
          <NotificationsNoneIcon />
        </Typography>
        <Typography>
          <PermIdentityIcon />
        </Typography>

        <Typography>Username</Typography>
      </Stack>
    </Box>
  );
};
