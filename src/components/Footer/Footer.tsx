import { FC, ComponentPropsWithoutRef } from "react";

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}

const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500" {...props}>
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Jeyhun. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export { Footer };
