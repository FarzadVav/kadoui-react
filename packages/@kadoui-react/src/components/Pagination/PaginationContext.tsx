import { createContext, Dispatch, SetStateAction } from "react";

export type PaginationContextT = {
  pageLength: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
};

export const PaginationContext = createContext<PaginationContextT>(
  {} as PaginationContextT,
);
