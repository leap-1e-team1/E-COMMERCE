"use client";

import ForgetPassword from "../../components/ForgetPassword";
import OTP from "@/components/OTP";
import NewPAss from "../../components/NewPass";
import Loading from "../../components/Loading";
import { useState } from "react";



const StepComponents = [ForgetPassword, OTP, NewPAss];

const ForgetPage = () => {
  const [step, setStep] = useState(0);
  const RenderingComponent = StepComponents[step];

  const continueHandler = () => {
    if (step == 2) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <RenderingComponent continueHandler={continueHandler} />
    </div>
  );
};

export default ForgetPage;
