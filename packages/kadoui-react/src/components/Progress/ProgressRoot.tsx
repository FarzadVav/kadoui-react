"use client"

import { cn } from "kadoui-utils";
import type { HTMLAttributes } from "react";

import { ProgressContext } from "./ProgressContext";

export type ProgressRootPropsT = HTMLAttributes<HTMLDivElement> & {
  value: number;
  maxValue?: number;
}

export function ProgressRoot({ value, maxValue = 100, className, ...p }: ProgressRootPropsT) {
  return (
    <ProgressContext value={{ value, maxValue }}>
      <div
        className={cn("w-full rounded-kado overflow-hidden h-6 bg-palette/10", className)}
        {...p}
      />
    </ProgressContext>
  )
}