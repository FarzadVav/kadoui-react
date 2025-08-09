"use client"

import { type HTMLAttributes, use } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";

export type BreadcrumbsItemPropsT = HTMLAttributes<HTMLDivElement> & {
  isLast?: boolean;
}

export function BreadcrumbsItem({ isLast = false, children, ...p }: BreadcrumbsItemPropsT) {
  const { separator } = use(BreadcrumbsContext);

  return (
    <div {...p}>
      {children}
      {!isLast && separator}
    </div>
  )
}