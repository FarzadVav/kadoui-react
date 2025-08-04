import { createContext, RefObject } from "react";

export type CarouselContextPropsT = {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export const CarouselContext = createContext<CarouselContextPropsT>({} as CarouselContextPropsT);