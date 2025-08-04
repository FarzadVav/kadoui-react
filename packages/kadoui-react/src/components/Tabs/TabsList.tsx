"use client"

import { cn } from "kadoui-utils";
import { HTMLAttributes } from "react";

export type TabsListPropsT = HTMLAttributes<HTMLDivElement>;

export function TabsList({ className, ...props }: TabsListPropsT) {
  return (
    <div className={cn("join-border", className)} {...props} />
  );
}