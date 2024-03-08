import { IntroSection, AboutSection, ProjectsSection } from "@/app/sections";
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
    </main>
  );
};

export default Home;
