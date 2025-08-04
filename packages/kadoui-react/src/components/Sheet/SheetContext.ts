import { AnimationScope, DragControls, MotionValue } from "framer-motion";
import { createContext, Dispatch, RefObject, SetStateAction } from "react";

export type SheetContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  closeHandler: () => void;
  drawerRef?: RefObject<HTMLDivElement>;
  scope?: AnimationScope<any>;
  controls?: DragControls;
  y?: MotionValue<number>;
}

export const SheetContext = createContext<SheetContextT>({} as SheetContextT);