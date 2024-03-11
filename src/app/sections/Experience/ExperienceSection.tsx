"use client";

import { FC, ComponentPropsWithoutRef, Fragment } from "react";
import { SectionHeading } from "@/components";
import { experiencesData } from "@/data/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView, useThemeSwitcher } from "@/hooks";

interface ExperienceSectionProps extends ComponentPropsWithoutRef<"section"> {}

const ExperienceSection: FC<ExperienceSectionProps> = ({ ...props }) => {
  const { ref, inView } = useSectionInView("Experience", 0.1);

  const { theme } = useThemeSwitcher();

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 sm:mb-40"
      {...props}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" className="before:rounded">
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "white"
                    : "rgb(17 24 39 / var(--tw-bg-opacity))",
                fontSize: "1.5rem",
              }}
            >
              <h4 className="font-semibold capitalize">{item.title}</h4>
              <h3 className="font-semibold capitalize">{item.company}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export { ExperienceSection };
