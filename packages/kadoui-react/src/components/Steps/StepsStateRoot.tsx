"use client";

import { PropsWithChildren, useState } from "react";

import { StepsT, StepsContext } from "./StepsContext";

export type StepsStateRootPropsT = PropsWithChildren & {
  steps: StepsT[];
}

export function StepsStateRoot({ children, steps }: StepsStateRootPropsT) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);

  const prevStep = () => setStep(prev => prev - 1);

  return (
    <StepsContext.Provider value={{ step, setStep, steps, nextStep, prevStep }}>
      {children}
    </StepsContext.Provider>
  );
}