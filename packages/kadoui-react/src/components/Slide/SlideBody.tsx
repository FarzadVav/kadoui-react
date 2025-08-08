import { HTMLAttributes } from "react";

export type SlideBodyPropsT = HTMLAttributes<HTMLDivElement>;

export function SlideBody(p: SlideBodyPropsT) {
  return <div {...p} />;
}