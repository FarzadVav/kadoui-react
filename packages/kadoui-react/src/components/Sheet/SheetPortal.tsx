"use client";

import { use } from "react";
import { cn } from "kadoui-utils";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { Portal } from "../Portal/Portal";
import { SheetContext } from "./SheetContext";
import { ClientOnly } from "../ClientOnly/ClientOnly";

export type SheetPortalPropsT = HTMLMotionProps<"div">;

export function SheetPortal({ className, ...props }: SheetPortalPropsT) {
  const { isOpen, closeHandler: handleClose, scope } = use(SheetContext);

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              ref={scope}
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn("fixed inset-0 z-50 bg-foreground/10", className)}
              {...props}
            />
          ) : null}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  )
}