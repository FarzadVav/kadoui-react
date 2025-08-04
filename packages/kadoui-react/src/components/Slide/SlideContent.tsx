import { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type SlideContentPropsT = HTMLAttributes<HTMLDivElement>;

export function SlideContent({ className, ...props }: SlideContentPropsT) {
  return <div className={cn("h-[calc(100dvh-5rem)] py-3 overflow-y-auto", className)} {...props} />;
}