"use client";

import { HTMLAttributes, KeyboardEvent, useEffect, useRef, useState } from "react";

import { PopoverContext, PopoverContextT } from "./PopoverContext";
import { selectAccessibleChildren } from "../../utils";


export type PopoverRootPropsT = HTMLAttributes<HTMLDivElement> & {
  mode?: PopoverContextT["mode"];
  accessHorizontalArrows?: "ArrowRight" | "ArrowLeft";
}

export function PopoverRoot({ mode = "click", accessHorizontalArrows, onKeyDown, onMouseEnter, onMouseLeave, ...p }: PopoverRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeHandler = () => {
      setOpen(false);
    }

    window.addEventListener("click", closeHandler);

    return () => window.removeEventListener("click", closeHandler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      selectFirstMenuChild();
    }
  }, [isOpen]);

  const selectFirstMenuChild = () => {
    if (!bodyRef.current) {
      return;
    }

    const children = selectAccessibleChildren(bodyRef.current);
    const firstChild = children[0];

    if (!firstChild) {
      return;
    }

    firstChild.focus();
  }

  const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (!accessHorizontalArrows) {
      return null;
    }

    if (ev.key === "ArrowRight") {
      if (accessHorizontalArrows === "ArrowRight") {
        setOpen(true);
        selectFirstMenuChild();
      } else {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    if (ev.key === "ArrowLeft") {
      if (accessHorizontalArrows === "ArrowLeft") {
        setOpen(true);
        selectFirstMenuChild();
      } else {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
  }

  return (
    <PopoverContext value={{ isOpen, setOpen, toggleRef, bodyRef, mode }}>
      <div
        onKeyDown={ev => {
          onKeyDown?.(ev);
          handleKeyDown(ev);
        }}
        onMouseEnter={ev => {
          onMouseEnter?.(ev);
          if (["hover", "both"].includes(mode)) {
            ev.stopPropagation();
            setOpen(true);
          }
        }}
        onMouseLeave={ev => {
          onMouseLeave?.(ev);
          if (["hover", "both"].includes(mode)) {
            ev.stopPropagation();
            setOpen(false);
          }
        }}
        {...p}
      />
    </PopoverContext>
  )
}