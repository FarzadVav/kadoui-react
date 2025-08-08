"use client";

import { use } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { SheetContext } from "./SheetContext";

export type SheetBodyPropsT = HTMLMotionProps<"div">;

export function SheetBody(p: SheetBodyPropsT) {
  const { controls, y, closeHandler: handleClose } = use(SheetContext);

  return (
    <motion.div
      id="sheet"
      onClick={(ev) => ev.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      style={{ y }}
      drag="y"
      dragControls={controls}
      dragListener={false}
      transition={{
        ease: "easeInOut",
      }}
      onDragEnd={() => {
        if ((y?.get() || 0) >= 100) {
          handleClose();
        }
      }}
      dragConstraints={{
        top: 0,
        bottom: 0,
      }}
      dragElastic={{
        top: 0,
        bottom: 0.5,
      }}
      {...p}
    />
  );
}