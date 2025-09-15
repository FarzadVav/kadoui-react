"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react";

import { PaginationContext } from "./PaginationContext";

export type PaginationSearchParamsRootPropsT = HTMLAttributes<HTMLDivElement> & {
  pageKey?: string;
  pageLength: number;
};

export function PaginationSearchParamsRoot({
  pageKey,
  pageLength,
  ...p
}: PaginationSearchParamsRootPropsT) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(+(searchParams.get(pageKey || "page") || "1"));
  }, [pageKey, searchParams]);

  const pushRouter = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(pageKey || "page", page.toString());
    router.push("?" + params.toString());
  };

  const setPage: Dispatch<SetStateAction<number>> = (page) => {
    if (page !== currentPage) {
      pushRouter(page as number);
    }
  };

  const nextPage = () => {
    if (currentPage < pageLength) {
      pushRouter(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      pushRouter(currentPage - 1);
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        page: currentPage,
        setPage,
        pageLength,
        nextPage,
        prevPage,
      }}>
      <div {...p} />
    </PaginationContext.Provider>
  );
}
