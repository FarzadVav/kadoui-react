"use client"

import { motion, HTMLMotionProps } from "framer-motion";

export type SwapItemPropsT = HTMLMotionProps<"span">;

export function SwapItem(p: SwapItemPropsT) {
  return (
    <motion.span
      initial={{ rotate: 90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      {...p}
    />
  )
}