import { createContext, Dispatch, SetStateAction } from "react";
import { AnimationScope, DragControls, MotionValue } from "framer-motion";

export type SheetContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  closeHandler: () => void;
  scope?: AnimationScope<any>;
  controls?: DragControls;
  y?: MotionValue<number>;
}

export const SheetContext = createContext<SheetContextT>({} as SheetContextT);