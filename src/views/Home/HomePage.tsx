import { FC, ComponentPropsWithoutRef } from "react";
import { AboutSection } from "@/sections/About";
import { IntroSection } from "@/sections/Intro";
import { SectionDivider } from "@components/SectionDivider";

interface HomePageProps extends ComponentPropsWithoutRef<"main"> {}

const HomePage: FC<HomePageProps> = ({ ...props }) => {
  return (
    <main className="flex flex-col items-center px-4" {...props}>
      <IntroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
    </main>
  );
};

export { HomePage };
