import { StepsRender } from "./StepsRender";
import { StepsPrevBtn } from "./StepsPrevBtn";
import { StepsNextBtn } from "./StepsNextBtn";
import { StepsIndexBtn } from "./StepsIndexBtn";
import { StepsStateRoot } from "./StepsStateRoot";
import { StepsSearchParamsRoot } from "./StepsSearchParamsRoot";

const baseComponents = {
  Render: StepsRender,
  IndexBtn: StepsIndexBtn,
  PrevBtn: StepsPrevBtn,
  NextBtn: StepsNextBtn
}

export const StepsWithState = Object.assign(StepsStateRoot, baseComponents);

export const StepsWithSearchParams = Object.assign(StepsSearchParamsRoot, baseComponents);