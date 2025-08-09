import { createContext, Dispatch, RefObject, SetStateAction } from "react";

export type PopoverContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  toggleRef: RefObject<HTMLButtonElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
  mode: "click" | "hover" | "both";
}

export const PopoverContext = createContext<PopoverContextT>({} as PopoverContextT);