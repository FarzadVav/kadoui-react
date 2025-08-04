"use client";

import { ButtonHTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreTriggerPropsT = ButtonHTMLAttributes<HTMLButtonElement>;

export function ShowMoreTrigger({ onClick, className, ...p }: ShowMoreTriggerPropsT) {
  const { setIsShowMore } = use(ShowMoreContext);

  return (
    <button
      className={cn("relative", className)}
      onClick={ev => {
        onClick?.(ev);
        setIsShowMore(prev => !prev);
      }}
      {...p}
    />
  )
}