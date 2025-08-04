"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreFadePropsT = HTMLAttributes<HTMLDivElement>;

export function ShowMoreFade({ className, ...p }: ShowMoreFadePropsT) {
  const { shouldShowMore, isShowMore } = use(ShowMoreContext);

  return (
    shouldShowMore && !isShowMore ? (
      <div className={cn("absolute inset-0 bg-gradient-to-t from-background from-35% to-transparent", className)} {...p} />
    ) : null
  )
}