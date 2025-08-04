import { createContext } from "react";

export type SwapContextT = {
  items: string[];
  activeItem: string;
  handleSwap: (newItem: string) => void;
}

export const SwapContext = createContext<SwapContextT>({} as SwapContextT);