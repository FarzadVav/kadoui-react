import { DropdownMenu } from "./DropdownMenu";
import { DropdownRoot } from "./DropdownRoot";
import { DropdownToggle } from "./DropdownToggle";

export const Dropdown = Object.assign(DropdownRoot, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu
});