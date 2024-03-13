import {
  IntroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
} from "@/pages/Home/sections";
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
      <SectionDivider />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Home;
