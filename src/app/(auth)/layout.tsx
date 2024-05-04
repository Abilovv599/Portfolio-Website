"use client";

import { FC, ReactNode } from "react";

import { ThemeSwitcher } from "@/components/shared";
import { useAuthContext } from "@/hooks";

interface AuthLayoutProps {
  children: Readonly<ReactNode>;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { isLoading, data } = useAuthContext();

  if (isLoading) return <></>;

  return (
    <>
      {data ? window.history.back() : children}
      <ThemeSwitcher />
    </>
  );
};

export default AuthLayout;
