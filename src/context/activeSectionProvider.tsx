"use client";

import { FC, ReactNode, useState } from "react";
import { ActiveSectionContext } from "./activeSectionContext";
import { SectionName } from "@/types/sectionName";

interface ActiveSectionContextProviderProps {
  children: ReactNode;
}

const ActiveSectionContextProvider: FC<ActiveSectionContextProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

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
