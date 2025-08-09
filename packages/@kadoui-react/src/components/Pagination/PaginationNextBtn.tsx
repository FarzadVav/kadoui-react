"use client";

import { HTMLAttributes, use } from "react";

import { PaginationContext } from "./PaginationContext";

export type PaginationNextBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

export function PaginationNextBtn({ onClick, disabled, ...p }: PaginationNextBtnPropsT) {
  const { page, pageLength, nextPage } = use(PaginationContext);

  return (
    <button
      disabled={disabled || page === pageLength}
      onClick={ev => {
        onClick?.(ev);
        nextPage();
      }}
      {...p}
    />
  )
}