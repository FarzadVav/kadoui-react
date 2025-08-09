"use client"

import { useLinkStatus } from "next/link";
import { PropsWithChildren, ReactNode } from "react";

export type LoaderLinkPropsT = PropsWithChildren & {
  loader: ReactNode;
}

export function LoaderLink({ loader, children }: LoaderLinkPropsT) {
  const { pending } = useLinkStatus();

  return pending ? loader : children;
}