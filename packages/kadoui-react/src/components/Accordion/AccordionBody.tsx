"use client";

import { cn } from "kadoui-utils";
import { ReactNode, use } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { AccordionContext } from "./AccordionContext";

export type AccordionBodyPropsT = HTMLMotionProps<"div">;

export function AccordionBody({ children, className, ...props }: AccordionBodyPropsT) {
  const { isOpen } = use(AccordionContext);

  return (
    <AnimatePresence>
      {isOpen ?
        <motion.div
          className={cn("overflow-hidden", className)}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          {...props}
        >
          <div className="m-3">
            {children as ReactNode}
          </div>
        </motion.div>
        : null}
    </AnimatePresence>
  )
}