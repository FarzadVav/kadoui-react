"use client"

import { cn } from "kadoui-utils";
import { HTMLAttributes, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreContentPropsT = HTMLAttributes<HTMLDivElement>;

export function ShowMoreContent({ children, className, ...props }: ShowMoreContentPropsT) {
  const { contentRef, shouldShowMore, isShowMore, maxHeight } = use(ShowMoreContext);

  return (
    <div
      ref={contentRef}
      className={cn("overflow-hidden transition-all", className)}
      style={{
        height: shouldShowMore
          ? isShowMore
            ? contentRef.current?.scrollHeight
              ? `${contentRef.current.scrollHeight}px`
              : "auto"
            : maxHeight
          : "auto"
      }}
      {...props}
    >
      {children}
    </div>
  )
}