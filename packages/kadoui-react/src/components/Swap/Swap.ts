import { SwapItem } from "./SwapItem";
import { SwapRoot } from "./SwapRoot";
import { SwapTrigger } from "./SwapTrigger";

export const Swap = Object.assign(SwapRoot, {
  Trigger: SwapTrigger,
  Item: SwapItem
});