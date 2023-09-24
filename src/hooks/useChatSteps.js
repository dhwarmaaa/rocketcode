import React, { useState } from "react";

const useChatSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return { currentStep, nextStep, prevStep };
};

export default useChatSteps;
