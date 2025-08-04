import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

export type StepsT = {
  name: string;
  component: ReactNode;
}

export type StepsContextT = {
  step: number;
  steps: StepsT[];
  setStep: Dispatch<SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
}

export const StepsContext = createContext<StepsContextT>({} as StepsContextT);