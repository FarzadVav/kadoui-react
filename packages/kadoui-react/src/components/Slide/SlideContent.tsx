import { cn } from "kadoui-utils";
import { HTMLAttributes } from "react";

export type SlideContentPropsT = HTMLAttributes<HTMLDivElement>;

export function SlideContent({ className, ...props }: SlideContentPropsT) {
  return <div className={cn("h-[calc(100dvh-5rem)] py-3 overflow-y-auto", className)} {...props} />;
}