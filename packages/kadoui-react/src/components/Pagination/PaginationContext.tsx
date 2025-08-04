import { createContext } from 'react';

export type PaginationContextT = {
  page: number;
  pageLength: number;
  nextPage: () => void;
  prevPage: () => void;
}

export const PaginationContext = createContext<PaginationContextT>({} as PaginationContextT);