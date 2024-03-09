import {
  IntroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
} from "@/app/sections";
import { SectionDivider } from "@/components";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <SkillsSection />
    </main>
  );
};

export default Home;
