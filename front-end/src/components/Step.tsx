"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { label: "Carts", icon: 1 },
    { label: "Delivery", icon: 2 },
    { label: "Payment", icon: 3 },
  ];

  return (
    <Box sx={{ width: "336px", display: "flex", alignItems: "center" }}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Box
            sx={{
              bgcolor:
                currentStep > index
                  ? "#2563EB"
                  : currentStep === index
                  ? "#2563EB"
                  : "gray",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30px",
              width: "30px",
              borderRadius: "50%",
            }}
          >
            {currentStep > index ? (
              <CheckCircleIcon />
            ) : (
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {step.icon}
              </Box>
            )}
          </Box>
          {index < steps.length - 1 && (
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: currentStep > index ? "black" : "gray",
                height: "2px",
                alignSelf: "center",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default StepIndicator;
