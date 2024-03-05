import { projectsData } from "@/data/data";
import { SectionHeading } from "@components/SectionHeading";
import { FC, ComponentPropsWithoutRef, Fragment } from "react";
import { Project } from "@/components/Project";

interface ProjectsSectionProps extends ComponentPropsWithoutRef<"section"> {}

const ProjectsSection: FC<ProjectsSectionProps> = ({ ...props }) => {
  return (
    <section id="projects" className="mb-28 scroll-mt-28" {...props}>
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
