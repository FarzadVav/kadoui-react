"use client"

import { cn } from "../../utils";
import type { HTMLAttributes, ReactNode } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";

export type BreadcrumbsRootPropsT = HTMLAttributes<HTMLElement> & {
  separator?: ReactNode;
}

export function BreadcrumbsRoot({ separator = "/", className, ...p }: BreadcrumbsRootPropsT) {
  return (
    <BreadcrumbsContext value={{ separator }}>
      <nav
        className={cn("f-align gap-3", className)}
        {...p}
      />
    </BreadcrumbsContext>
  )
}