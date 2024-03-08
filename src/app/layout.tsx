import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/layouts";
import { ActiveSectionContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeyhun | Software Developer",
  description: `Jeyhun is a Full-stack Developer with ${new Date().getFullYear() - 2022} years of experience`,
  keywords:
    "Jeyhun, Abilov, Full-stack, Developer, Software, Engineer, Web, Developer, Frontend, Backend, JavaScript, TypeScript, React, Next.js, Node.js, TailwindCSS, MongoDB, PostgreSQL, MySQL, GraphQL, Apollo, Prisma, Vercel, Netlify, AWS, Azure, Docker, Kubernetes, CI/CD, DevOps, SEO, Performance, Accessibility, PWA, Microservices, Clean, Code, SOLID, Design, Patterns, Architecture, Algorithms, Data, Structures, OOP, FP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 sm:pt-48 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionContextProvider>
          <Analytics />
          <SpeedInsights />
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
