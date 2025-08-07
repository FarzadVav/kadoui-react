"use client";

import { ReactNode, use } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { AccordionContext } from "./AccordionContext";

export type AccordionBodyPropsT = HTMLMotionProps<"div">;

export function AccordionBody({ children, style, ...props }: AccordionBodyPropsT) {
  const { isOpen } = use(AccordionContext);

  return (
    <AnimatePresence>
      {isOpen ?
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{
            overflow: "hidden",
            ...style
          }}
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