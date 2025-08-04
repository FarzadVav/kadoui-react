"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import { CarouselContext } from "./CarouselContext";

export type CarouselContainerPropsT = HTMLAttributes<HTMLDivElement>;

export function CarouselContainer({ children, className, ...p }: CarouselContainerPropsT) {
  const { scrollRef } = use(CarouselContext);

  return (
    <div ref={scrollRef} className={cn("f-align-scroll", className)} {...p}>
      {children}
    </div>
  );
}