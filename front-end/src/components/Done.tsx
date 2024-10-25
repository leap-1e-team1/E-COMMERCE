"use client";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Done: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.contrastText",
        m: 1,
        width: { xs: "100%", md: 374 },
        height: "185px",
        borderRadius: "16px",
        padding: "20px",
        border: "1px solid #E0E0E0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CheckCircleIcon
        sx={{ color: (theme) => theme.palette.secondary.main }}
      />

      <Typography sx={{ fontWeight: "18px" }}>
        Захиалга амжилттай баталгаажлаа.
      </Typography>
    </Box>
  );
};

export default Done;
