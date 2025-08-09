import { ShowMoreRoot } from "./ShowMoreRoot";
import { ShowMoreFade } from "./ShowMoreFade";
import { ShowMoreContent } from "./ShowMoreContent";
import { ShowMoreTrigger } from "./ShowMoreTrigger";

export const ShowMore = Object.assign(ShowMoreRoot, {
  Content: ShowMoreContent,
  Trigger: ShowMoreTrigger,
  Fade: ShowMoreFade
});