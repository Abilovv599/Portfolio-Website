"use client";

import { SectionName } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";

type ActiveSectionContextProps = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextProps | null>(
  null,
);

export { ActiveSectionContext };
