"use client";

import { cn } from "@kadoui/utils";
import { HTMLAttributes, use } from "react";

import { DropdownContext } from "./DropdownContext";

export type DropdownMenuPropsT = HTMLAttributes<HTMLDivElement> & {
  preventClose?: boolean;
}

export function DropdownMenu({ preventClose, onClick, className, ...p }: DropdownMenuPropsT) {
  const { menuRef, isOpen } = use(DropdownContext);

  return (
    isOpen ? (
      <div
        ref={menuRef}
        onClick={ev => {
          if (preventClose) {
            ev.stopPropagation();
          }

          onClick?.(ev);
        }}
        className={cn(
          "absolute w-max z-10",
          className
        )}
        {...p}
      />
    ) : null
  )
}