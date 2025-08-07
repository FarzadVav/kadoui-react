"use client";

import { cn } from "../../utils";
import { HTMLAttributes, useEffect, useRef } from "react";

import { OtpContext } from "./OtpContext";

export type OtpRootPropsT = HTMLAttributes<HTMLDivElement>;

export function OtpRoot({ className, ...props }: OtpRootPropsT) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const getInputsValue = () => {
    return inputs?.current.map(input => input?.value || "").join("") || "";
  };

  return (
    <OtpContext value={{ inputs, getInputsValue }}>
      <div className={cn("f-align gap-1.5", className)} {...props} />
    </OtpContext>
  );
}