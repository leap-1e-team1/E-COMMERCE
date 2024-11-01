"use client";
import React, { useState } from "react";
import { Stack } from "@mui/material";
import Steps from "@/components/Step";
import Carts from "@/components/Carts";
import Delivery from "@/components/DeliveryInformation";
import Payment from "@/components/Payment";
import Done from "@/components/Done";
import { useSearch } from "@/provider/SearchProvider";

export default function Cart() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { cartedProducts } = useSearch();

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <Stack
      gap={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      {currentStep < 3 && <Steps currentStep={currentStep} />}
      {currentStep === 0 && (
        <Carts products={cartedProducts} onNext={handleNextStep} />
      )}
      {currentStep === 1 && (
        <Delivery
          products={cartedProducts}
          onNext={handleNextStep}
          onBack={handleBackStep}
        />
      )}
      {currentStep === 2 && <Payment onNext={handleNextStep} />}
      {currentStep === 3 && <Done />}
    </Stack>
  );
}
