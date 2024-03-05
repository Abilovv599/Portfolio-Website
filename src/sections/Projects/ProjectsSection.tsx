import { FC, ComponentPropsWithoutRef } from "react";

interface ProjectsSectionProps extends ComponentPropsWithoutRef<"section"> {}

const ProjectsSection: FC<ProjectsSectionProps> = ({ ...props }) => {
  return <section {...props}>ProjectsSection</section>;
};

export { ProjectsSection };
