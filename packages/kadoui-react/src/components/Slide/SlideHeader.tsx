import { cn } from "kadoui-utils";
import { HTMLAttributes } from "react";

export type SlideHeaderPropsT = HTMLAttributes<HTMLHeadingElement>

export function SlideHeader({ className, ...props }: SlideHeaderPropsT) {
  return (
    <header className={cn("h-20 f-align border-b border-foreground/10", className)} {...props} />
  );
}