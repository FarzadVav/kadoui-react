import { cn } from "../../utils";
import { CheckIcon, CircleAlertIcon, TriangleAlertIcon, XIcon } from "lucide-react";

import { ToastT } from "./ToastRoot";

export type ToastBoxPropsT = {
  toast: ToastT;
}

export function ToastBox({ toast }: ToastBoxPropsT) {
  let toastIcon = null;

  switch (toast.status) {
    case "info": {
      toastIcon = <CircleAlertIcon className="toast-icon-info" />;
      break;
    }

    case "success": {
      toastIcon = <CheckIcon className="toast-icon-success" />;
      break;
    }

    case "warning": {
      toastIcon = <TriangleAlertIcon className="toast-icon-warning" />;
      break;
    }

    case "error": {
      toastIcon = <XIcon className="toast-icon-error" />;
      break;
    }

    default: {
      toastIcon = null;
      break;
    }
  }

  return (
    <div className={cn(
      toast.variant || "toast-fill",
      toast.size
    )}>
      {toastIcon}
      {toast.data}
      {toast.action}
    </div>
  )
}