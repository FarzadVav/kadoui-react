import { PopoverMenu } from "./PopoverMenu";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverToggle } from "./PopoverToggle";

export const Popover = Object.assign(PopoverRoot, {
  Toggle: PopoverToggle,
  Menu: PopoverMenu
});