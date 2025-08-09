"use client";

import { createPortal } from "react-dom";
import { PropsWithChildren } from "react";

export type PortalPropsT = PropsWithChildren & {
  container?: Element;
}

export function Portal({ children, container }: PortalPropsT) {
  return createPortal(
    <>
      {children}
    </>,
    container || document.body
  );
}