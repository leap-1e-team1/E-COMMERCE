"use client";
import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import Steps from "@/components/Step";
import Carts from "@/components/Carts";
import Delivery from "@/components/DeliveryInformation";
import Payment from "@/components/Payment";
import Done from "@/components/Done";

export default function Cart() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const cartedItems = localStorage.getItem("cartedItems");
    const items = cartedItems ? JSON.parse(cartedItems) : [];
    setProducts(items);
  }, []);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
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
        <Carts
          products={products}
          setProducts={setProducts}
          onNext={handleNextStep}
        />
      )}
      {currentStep === 1 && (
        <Delivery
          products={products}
          onNext={handleNextStep}
          onBack={handleBackStep}
        />
      )}
      {currentStep === 2 && <Payment onNext={handleNextStep} />}
      {currentStep === 3 && <Done />}
    </Stack>
  );
}
