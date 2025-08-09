"use client";

import { HTMLAttributes, use } from "react";

import { PopoverContext } from "./PopoverContext";

export type PopoverMenuPropsT = HTMLAttributes<HTMLDivElement> & {
  preventClose?: boolean;
}

export function PopoverMenu({ preventClose, onClick, ...p }: PopoverMenuPropsT) {
  const { menuRef, isOpen } = use(PopoverContext);

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