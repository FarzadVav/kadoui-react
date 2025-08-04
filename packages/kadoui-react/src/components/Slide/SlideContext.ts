import { createContext, Dispatch, SetStateAction } from "react";

export type SlideContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const SlideContext = createContext<SlideContextT>({
  isOpen: false,
  setOpen: () => { }
});