"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import CountdownTimer from "./Timer";
import { CustomButton } from "./Button";

const bankImages = [
  { src: "/1.png", alt: "Bank 1" },
  { src: "/mbank.png", alt: "Mbank" },
  { src: "/ard.png", alt: "Ard Bank" },
  { src: "/qpayPayment.png", alt: "Qpay" },
  { src: "/khaanbank.png", alt: "Khaan Bank" },
  { src: "/turiinbank.png", alt: "Turiin Bank" },
  { src: "/khas.png", alt: "Khas Bank" },
  { src: "/tdb.png", alt: "TDB" },
  { src: "/mostmoney.png", alt: "Most Money" },
  { src: "/2.png", alt: "Bank 2" },
  { src: "/kapitron.png", alt: "Kapitron" },
  { src: "/capital.png", alt: "Capital Bank" },
  { src: "/bogd.png", alt: "Bogd Bank" },
];

const Payment: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.contrastText",
        m: 1,
        width: { xs: "100%", md: 687 },
        height: "656px",
        borderRadius: "32px",
        padding: "20px",
        border: "1px solid #E0E0E0",
        gap: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          3. Төлбөр төлөлт
        </Typography>
      </Box>

      <CountdownTimer minutes={15} />

      <Box
        sx={{
          width: "329px",
          height: "192px",
          bgcolor: "primary.contrastText",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="./qr.png"
          alt="QR Code"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        Төлөх боломжтой банкууд:
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "603px",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {bankImages.map((bank) => (
          <img
            key={bank.alt}
            src={bank.src}
            alt={bank.alt}
            style={{ width: "47px", height: "47px" }}
          />
        ))}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
      >
        <CustomButton
          text="Буцах"
          textColor="#111111"
          handleClick={onNext}
          bgColor="#fff"
          height="36px"
          border="secondary.main"
        />
      </Box>
    </Box>
  );
};

export default Payment;
