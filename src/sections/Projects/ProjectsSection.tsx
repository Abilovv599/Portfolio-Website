"use client";

import { projectsData } from "@/data/data";
import { SectionHeading } from "@components/SectionHeading";
import { FC, ComponentPropsWithoutRef, Fragment } from "react";
import { Project } from "@/components/Project";
import { useSectionInView } from "@/hooks/useSectionInView";

interface ProjectsSectionProps extends ComponentPropsWithoutRef<"section"> {}

const ProjectsSection: FC<ProjectsSectionProps> = ({ ...props }) => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="mb-28 scroll-mt-24" ref={ref} {...props}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export { ProjectsSection };
