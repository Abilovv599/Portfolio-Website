import { FC, ComponentPropsWithoutRef } from "react";
import { IntroSection } from "@sections/Intro";
import { SectionDivider } from "@components/SectionDivider";
import { AboutSection } from "@sections/About";
import { ProjectsSection } from "@sections/Projects";

interface HomePageProps extends ComponentPropsWithoutRef<"main"> {}

const HomePage: FC<HomePageProps> = ({ ...props }) => {
  return (
    <main className="flex flex-col items-center px-4" {...props}>
      <IntroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
    </main>
  );
};

export { HomePage };
