"use client";

import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { getUserProfile } from "@/services";
import { AuthContext } from "./";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    retry: 0,
  });
  return (
    <AuthContext.Provider value={{ ...query }}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider };
