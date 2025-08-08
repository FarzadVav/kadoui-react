"use client";

import { useState, useEffect, HTMLAttributes } from "react";

export type AffixPropsT = HTMLAttributes<HTMLButtonElement> & {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const Affix = ({ style, onClick, position, ...p }: AffixPropsT) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.5;

      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY && currentScrollY < scrollThreshold) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={ev => {
        onClick?.(ev)
        scrollToTop()
      }}
      style={{
        zIndex: 50,
        position: "fixed",
        transition: "all 150ms ease",
        ...(
          position.startsWith("top")
            ? { top: 12 }
            : { bottom: 12 }
        ),
        ...(
          position.endsWith("left")
            ? { left: 12 }
            : { right: 12 }
        ),
        ...(
          isVisible
            ? {}
            : {
              opacity: 0,
              visibility: "hidden",
              pointerEvents: "none",
              translate: "0 12px",
            }
        ),
        ...style
      }}
      {...p}
    />
  );
}