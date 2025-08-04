"use client"

import { cn } from "../../utils/cn";
import { type HTMLAttributes, use } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";

export type BreadcrumbsItemPropsT = HTMLAttributes<HTMLDivElement> & {
  isLast?: boolean;
}

export function BreadcrumbsItem({ isLast = false, className, children, ...p }: BreadcrumbsItemPropsT) {
  const { separator } = use(BreadcrumbsContext);

  return (
    <div
      className={cn("f-center gap-1.5", className)}
      {...p}
    >
      {children}
      {!isLast && separator}
    </div>
  )
}