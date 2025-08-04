"use client";

import { cn } from "kadoui-utils";
import { HTMLAttributes, use } from "react";

import { TabsContext } from "./TabsContext";

export type TabsPanelPropsT = HTMLAttributes<HTMLDivElement> & {
  value: string;
}

export function TabsPanel({ value, className, ...props }: TabsPanelPropsT) {
  const { activeTab } = use(TabsContext);

  const isActive = activeTab === value;

  return isActive ? (
    <div
      className={cn("p-3 rounded-kado bg-foreground/10 mt-1.5", className)}
      {...props}
    />
  ) : null
}