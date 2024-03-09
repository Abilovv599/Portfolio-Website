"use client";

import { SectionHeading, Skill } from "@/components";
import { skillsData } from "@/data";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import { FC, ComponentPropsWithoutRef } from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface SkillsSectionProps extends ComponentPropsWithoutRef<"section"> {}

const SkillsSection: FC<SkillsSectionProps> = ({ ...props }) => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 mt-10 max-w-6xl scroll-mt-32 text-center sm:mb-7"
      id="skills"
      {...props}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map(({ technology, documentation, logo }, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Skill
              technology={technology}
              documentation={documentation}
              logo={logo}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export { SkillsSection };
