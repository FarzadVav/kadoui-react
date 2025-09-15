"use client";

import { HTMLAttributes, useState } from "react";

import { PaginationContext } from "./PaginationContext";

export type PaginationStateRootPropsT = HTMLAttributes<HTMLDivElement> & {
  pageLength: number;
};

export function PaginationStateRoot({ pageLength, ...p }: PaginationStateRootPropsT) {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prev) => (prev < pageLength ? prev + 1 : prev));

  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <PaginationContext.Provider value={{ page, setPage, pageLength, nextPage, prevPage }}>
      <div {...p} />
    </PaginationContext.Provider>
  );
}
