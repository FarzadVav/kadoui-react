"use client";

import { HTMLAttributes, use } from "react";

import { SheetContext } from "./SheetContext";

export type SheetHeaderPropsT = HTMLAttributes<HTMLDivElement>;

export function SheetHeader({ onPointerDown, ...p }: SheetHeaderPropsT) {
  const { controls } = use(SheetContext);

  return (
    <div
      onPointerDown={(ev) => {
        controls?.start(ev);
        onPointerDown?.(ev);
      }}
      {...p}
    />
  );
}