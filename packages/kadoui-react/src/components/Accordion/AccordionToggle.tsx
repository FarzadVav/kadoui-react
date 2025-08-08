"use client";

import { HTMLAttributes, ReactNode, use } from "react";

import { cn } from "../../utils";
import { AccordionContext } from "./AccordionContext";

export type AccordionTogglePropsT = HTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
}

export function AccordionToggle({ className, onClick, ...props }: AccordionTogglePropsT) {
  const { isOpen, setOpen } = use(AccordionContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev)
        setOpen(prev => !prev)
      }}
      className={cn(
        isOpen ? "accordion-active" : null,
        className
      )}
      {...props}
    />
  )
}