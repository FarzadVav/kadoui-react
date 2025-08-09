import { HTMLAttributes } from "react";

export type SheetContentPropsT = HTMLAttributes<HTMLDivElement>;

export function SheetContent(p: SheetContentPropsT) {
  return <div {...p} />;
}