import { cn } from "kadoui-utils";
import { HTMLAttributes } from "react";

export type SheetContentPropsT = HTMLAttributes<HTMLDivElement>;

export function SheetContent({ className, ...props }: SheetContentPropsT) {
  return <div className={cn("overflow-y-auto h-[calc(100%-1.75rem)] px-3 pb-3", className)} {...props} />;
}