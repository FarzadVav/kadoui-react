"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { SlideContext } from "./SlideContext";

export type SlideRootPropsT = PropsWithChildren & {
  defaultDuration?: number;
};

export function SlideRoot({ defaultDuration = 500, children }: SlideRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const rootElem = document.getElementById("root");
    if (!rootElem) {
      return;
    };
    rootElem.style.transition = `${defaultDuration}ms ease-in-out`;

    const bodyElem = document.body;

    const removeStyles = () => {
      rootElem.style.translate = "unset";
      setTimeout(() => {
        bodyElem.style.overflow = "unset";
      }, defaultDuration);
    }

    if (isOpen) {
      bodyElem.style.overflow = "hidden";
      rootElem.style.translate = "100% 0"
    } else {
      removeStyles();
    };

    return () => {
      removeStyles();
    };
  }, [isOpen]);

  return (
    <SlideContext value={{ isOpen, setOpen }}>
      {children}
    </SlideContext>
  )
}