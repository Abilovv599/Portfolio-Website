import { AboutSection } from "@/components/AboutSection";
import { IntroSection } from "@/components/IntroSection";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
    </main>
  );
}
