import { createContext } from "react";

export type SwapContextT = {
  items: string[];
  activeItem: string | undefined;
  handleSwap: (newItem: string) => void;
}

export const SwapContext = createContext<SwapContextT>({} as SwapContextT);