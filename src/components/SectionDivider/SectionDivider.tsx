import { FC, ComponentPropsWithoutRef } from "react";

interface SectionDividerProps extends ComponentPropsWithoutRef<"div"> {}

const SectionDivider: FC<SectionDividerProps> = ({ ...props }) => {
  return (
    <div
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-200 sm:block"
      {...props}
    ></div>
  );
};

export { SectionDivider };
