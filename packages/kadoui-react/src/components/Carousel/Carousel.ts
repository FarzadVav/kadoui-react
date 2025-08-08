import { CarouselRoot } from "./CarouselRoot";
import { CarouselLeftFade } from "./CarouselLeftFade";
import { CarouselContainer } from "./CarouselContainer";
import { CarouselRightFade } from "./CarouselRightFade";

export const Carousel = Object.assign(CarouselRoot, {
  Container: CarouselContainer,
  LeftFade: CarouselLeftFade,
  RightFade: CarouselRightFade
});