import { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type SlideHeaderPropsT = HTMLAttributes<HTMLHeadingElement>

export function SlideHeader({ className, ...props }: SlideHeaderPropsT) {
  return (
    <header className={cn("h-20 f-align border-b border-foreground/10", className)} {...props} />
  );
}