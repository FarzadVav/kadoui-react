import type { HTMLAttributes } from "react";

export type ModalContentPropsT = HTMLAttributes<HTMLDivElement>;

export function ModalContent(p: ModalContentPropsT) {
  return (
    <div {...p} />
  );
}