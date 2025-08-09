"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";

import { CarouselContext } from "./CarouselContext";

export type CarouselRootPropsT = HTMLAttributes<HTMLDivElement>;

export function CarouselRoot(p: CarouselRootPropsT) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [leftOpacity, setLeftOpacity] = useState(0);
  const [rightOpacity, setRightOpacity] = useState(1);

  const updateFade = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setLeftOpacity(0);
      setRightOpacity(0);
      return;
    }

    const scrollRatio = Math.abs(+(scrollLeft / maxScroll));

    const left = Math.min(1, scrollRatio * 2);
    const right = Math.min(1, (1 - scrollRatio) * 2);

    setLeftOpacity(+left.toFixed(1));
    setRightOpacity(+right.toFixed(1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateFade();

    el.addEventListener("scroll", updateFade);
    window.addEventListener("resize", updateFade);

    return () => {
      el.removeEventListener("scroll", updateFade);
      window.removeEventListener("resize", updateFade);
    };
  }, []);

  return (
    <CarouselContext value={{ scrollRef, leftOpacity, rightOpacity }}>
      <div {...p} />
    </CarouselContext>
  );
}