import { cn } from "../../utils";
import type { HTMLAttributes } from "react";

export type ModalBodyPropsT = HTMLAttributes<HTMLDivElement>;

export function ModalBody({ children, className, ...props }: ModalBodyPropsT) {
  return (
    <div className={cn("py-3 px-1.5 mx-1.5 max-h-[calc(100%-4rem)] overflow-y-auto", className)} {...props}>
      {children}
    </div>
  );
}