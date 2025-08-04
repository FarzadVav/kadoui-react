"use client";

import { createPortal } from "react-dom";
import { useMounted } from "@mantine/hooks";
import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ToastBox } from "./ToastBox";
import { useToastStore } from "./toastStore";

export type ToastT = {
  id: string;
  data: ReactNode;
  status?: "info" | "success" | "warning" | "error";
  variant?: "toast-fill" | "toast-glass";
  size?: "toast-sm" | "toast-lg";
  action?: ReactNode;
  duration?: number;
};

export type ToastRootT = {
  defaultDuration?: ToastT["duration"];
}

export function ToastRoot({ defaultDuration }: ToastRootT) {
  const mounted = useMounted();

  const toasts = useToastStore(store => store.toasts);
  const remove = useToastStore(store => store.remove);

  useEffect(() => {
    if (!toasts.length) {
      return;
    };

    const lastToast = toasts[toasts.length - 1];

    if (lastToast) {
      const duration = lastToast?.duration || defaultDuration || 2_000;

      setTimeout(() => {
        remove(lastToast.id);
      }, duration);
    }
  }, [toasts]);

  if (!mounted) {
    return null;
  };

  return createPortal(
    <>
      <div className="max-h-screen py-3 space-y-3 fixed top-0 left-center w-fit">
        <AnimatePresence>
          {toasts.toReversed().map(item => (
            <motion.div
              key={item.id}
              className="origin-top"
              initial={{ opacity: 0, y: -10, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0 }}
            >
              <ToastBox toast={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>,
    document.body
  )
}