"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";

import { SheetContext } from "./SheetContext";

export type SheetRootPropsT = PropsWithChildren;

export function SheetRoot({ children }: SheetRootPropsT) {
  const y = useMotionValue(0);
  const controls = useDragControls();
  const [scope, animate] = useAnimate();

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const removeOverflow = () => {
      document.body.classList.remove("overflow-hidden");
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      removeOverflow();
    }

    return () => removeOverflow();
  }, [isOpen]);

  const closeHandler = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate("#sheet", {
      y: [yStart, "100%"],
    });

    setOpen(false);
  };

  return (
    <SheetContext value={{ isOpen, setOpen, closeHandler, scope, controls, y }}>
      {children}
    </SheetContext>
  );
}