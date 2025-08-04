"use client"

import { cn } from "kadoui-utils";
import { HTMLAttributes, useState } from "react";

import { RatingContext, RatingContextT } from "./RatingContext";

export type RatingRootPropsT = HTMLAttributes<HTMLDivElement>

export const RatingRoot = ({ className, ...p }: RatingRootPropsT) => {
  const [hoverValue, setHoverValue] = useState<RatingContextT["hoverValue"]>(null);

  return (
    <RatingContext value={{ hoverValue, setHoverValue }}>
      <div
        className={cn("f-align w-fit max-w-full", className)}
        onMouseLeave={() => setHoverValue(null)}
        {...p}
      />
    </RatingContext>
  )
}