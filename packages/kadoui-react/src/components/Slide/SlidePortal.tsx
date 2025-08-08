"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils";
import { Portal } from "../Portal/Portal";
import { SlideContext } from "./SlideContext";

export type SlidePortalPropsT = HTMLAttributes<HTMLDivElement>;

export function SlidePortal({ className, ...props }: SlidePortalPropsT) {
  const { isOpen } = use(SlideContext);

  return (
    <Portal>
      <div
        className={cn(
          isOpen ? "slide-active" : "",
          className
        )}
        {...props}
      />
    </Portal>
  );
}