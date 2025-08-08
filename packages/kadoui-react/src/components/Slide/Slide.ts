import { SlideRoot } from "./SlideRoot";
import { SlideHeader } from "./SlideHeader";
import { SlidePortal } from "./SlidePortal";
import { SlideToggle } from "./SlideToggle";
import { SlideBody } from "./SlideBody";

export const Slide = Object.assign(SlideRoot, {
  Portal: SlidePortal,
  Toggle: SlideToggle,
  Header: SlideHeader,
  Body: SlideBody
});