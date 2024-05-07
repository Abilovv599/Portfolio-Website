"use client";

import { User } from "@/types/User";
import { UseQueryResult } from "@tanstack/react-query";
import { createContext } from "react";

type AuthContextType = UseQueryResult<User, Error>;

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext };
