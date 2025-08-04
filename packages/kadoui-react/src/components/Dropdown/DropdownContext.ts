import { createContext, Dispatch, RefObject, SetStateAction } from "react";

export type DropdownContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  toggleRef: RefObject<HTMLButtonElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
}

export const DropdownContext = createContext<DropdownContextT>({} as DropdownContextT);