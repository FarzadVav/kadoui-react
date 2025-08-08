"use client";

import { HTMLAttributes, use } from "react";

import { StepsContext } from "./StepsContext";

export type StepsIndexBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  index: number;
};

export function StepsIndexBtn({ index, onClick, ...p }: StepsIndexBtnPropsT) {
  const { step, setStep } = use(StepsContext);

  return (
    <button
      disabled={step < index}
      onClick={ev => {
        onClick?.(ev);
        setStep(index);
      }}
      {...p}
    />
  );
}