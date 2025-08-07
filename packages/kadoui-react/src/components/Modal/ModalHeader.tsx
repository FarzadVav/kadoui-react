import { cn } from "../../utils";
import type { HTMLAttributes } from "react";

export type ModalHeaderPropsT = HTMLAttributes<HTMLDivElement>;

export function ModalHeader({ className, ...props }: ModalHeaderPropsT) {
  return (
    <div className={cn("h-16 f-align px-3 bg-background rounded-t-2xl border-b border-separator sticky top-0", className)} {...props} />
  );
}