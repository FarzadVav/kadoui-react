import { SheetBody } from "./SheetBody";
import { SheetRoot } from "./SheetRoot";
import { SheetHeader } from "./SheetHeader";
import { SheetPortal } from "./SheetPortal";
import { SheetToggle } from "./SheetToggle";
import { SheetContent } from "./SheetContent";

export const Sheet = Object.assign(SheetRoot, {
  Portal: SheetPortal,
  Body: SheetBody,
  Header: SheetHeader,
  Content: SheetContent,
  Toggle: SheetToggle
});