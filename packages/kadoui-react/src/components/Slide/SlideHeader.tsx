import { HTMLAttributes } from "react";

export type SlideHeaderPropsT = HTMLAttributes<HTMLHeadingElement>

export function SlideHeader(p: SlideHeaderPropsT) {
  return <header {...p} />;
}