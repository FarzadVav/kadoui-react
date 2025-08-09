"use client";

import { use } from "react";

import { StepsContext } from "./StepsContext";

export function StepsRender() {
  const { step, steps } = use(StepsContext);

  return steps.find((_, index) => index + 1 === step)?.component;
}