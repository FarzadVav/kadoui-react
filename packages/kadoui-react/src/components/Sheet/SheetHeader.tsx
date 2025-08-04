"use client";

import { cn } from "../../utils/cn";
import { HTMLAttributes, use } from "react";

import { SheetContext } from "./SheetContext";

export type SheetHeaderPropsT = HTMLAttributes<HTMLDivElement>;

export function SheetHeader({ className, children, ...props }: SheetHeaderPropsT) {
  const { controls } = use(SheetContext);

  return (
    <div
      className={cn("h-7 f-center", className)}
      onPointerDown={(ev) => controls?.start(ev)}
      {...props}
    >
      {children || (
        <span className="h-1 w-1/3 rounded-full bg-foreground/10" />
      )}
    </div>
  );
}