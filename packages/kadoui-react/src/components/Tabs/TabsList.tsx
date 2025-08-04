"use client"

import { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type TabsListPropsT = HTMLAttributes<HTMLDivElement>;

export function TabsList({ className, ...props }: TabsListPropsT) {
  return (
    <div className={cn("join-border", className)} {...props} />
  );
}