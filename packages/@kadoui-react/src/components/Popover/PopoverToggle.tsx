"use client";

import { HTMLAttributes, use } from "react";

import { PopoverContext } from "./PopoverContext";

export type PopoverTogglePropsT = HTMLAttributes<HTMLButtonElement>;

export function PopoverToggle({ onClick, ...props }: PopoverTogglePropsT) {
  const { mode, toggleRef, setOpen } = use(PopoverContext);

  return (
    <button
      ref={toggleRef}
      onClick={ev => {
        onClick?.(ev);
        ev.stopPropagation();
        if (["click", "both"].includes(mode)) {
          setOpen(prev => !prev);
        }
      }}
      {...props}
    />
  )
}