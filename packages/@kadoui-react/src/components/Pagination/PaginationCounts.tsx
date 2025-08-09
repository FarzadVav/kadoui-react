"use client";

import { HTMLAttributes, use } from "react";

import { PaginationContext } from "./PaginationContext";

export type PaginationCountsPropsT = HTMLAttributes<HTMLParagraphElement>;

export function PaginationCounts(props: PaginationCountsPropsT) {
  const { page, pageLength } = use(PaginationContext);

  return (
    <p {...props}>
      Page {page} / {pageLength}
    </p>
  );
}