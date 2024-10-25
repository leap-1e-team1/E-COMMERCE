"use client";
import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

interface CountdownTimerProps {
  minutes?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ minutes = 15 }) => {
  const [timeLeft, setTimeLeft] = useState<number>(minutes * 60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: 2 }}>
      <Typography variant="h6" color="text.secondary">
        {formatTime(timeLeft)}
      </Typography>
    </Box>
  );
};

export default CountdownTimer;
