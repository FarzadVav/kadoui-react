"use client";

import { HTMLAttributes, use } from "react";

import { DropdownContext } from "./DropdownContext";

export type DropdownMenuPropsT = HTMLAttributes<HTMLDivElement> & {
  preventClose?: boolean;
}

export function DropdownMenu({ preventClose, onClick, ...p }: DropdownMenuPropsT) {
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
        {...p}
      />
    ) : null
  )
}