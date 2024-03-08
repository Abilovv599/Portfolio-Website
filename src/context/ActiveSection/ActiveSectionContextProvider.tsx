"use client";

import { FC, ReactNode, useState } from "react";
import { SectionName } from "@/types";
import { ActiveSectionContext } from "./ActiveSectionContext";

interface ActiveSectionContextProviderProps {
  children: ReactNode;
}

const ActiveSectionContextProvider: FC<ActiveSectionContextProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionContextProvider };
