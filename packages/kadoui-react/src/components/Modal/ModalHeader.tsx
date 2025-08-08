import type { HTMLAttributes } from "react";

export type ModalHeaderPropsT = HTMLAttributes<HTMLDivElement>;

export function ModalHeader(p: ModalHeaderPropsT) {
  return (
    <div {...p} />
  );
}