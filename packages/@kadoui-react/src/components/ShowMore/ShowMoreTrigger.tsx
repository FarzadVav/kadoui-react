"use client";

import { ButtonHTMLAttributes, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreTriggerPropsT = ButtonHTMLAttributes<HTMLButtonElement>;

export function ShowMoreTrigger({ onClick, style, ...p }: ShowMoreTriggerPropsT) {
  const { setIsShowMore } = use(ShowMoreContext);

  return (
    <button
      style={{
        position: "relative",
        ...style
      }}
      onClick={ev => {
        onClick?.(ev);
        setIsShowMore(prev => !prev);
      }}
      {...p}
    />
  )
}