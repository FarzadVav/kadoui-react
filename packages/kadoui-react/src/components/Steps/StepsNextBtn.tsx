"use client";

import { HTMLAttributes, use } from "react";

import { StepsContext } from "./StepsContext";

export type StepsNextBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
}

export function StepsNextBtn({ onClick, disabled, ...p }: StepsNextBtnPropsT) {
  const { step, steps, nextStep } = use(StepsContext);

  return (
    <button
      disabled={disabled || step === steps.length}
      onClick={ev => {
        onClick?.(ev);
        nextStep();
      }}
      {...p}
    />
  );
}