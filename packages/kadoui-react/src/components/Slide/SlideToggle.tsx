"use client";

import React, { HTMLAttributes, use } from "react";

import { SlideContext } from "./SlideContext";

export type SlideTogglePropsT = HTMLAttributes<HTMLButtonElement>;

export function SlideToggle({ onClick, ...props }: SlideTogglePropsT) {
  const { setOpen } = use(SlideContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev);
        setOpen(prev => !prev);
      }}
      {...props}
    />
  );
}