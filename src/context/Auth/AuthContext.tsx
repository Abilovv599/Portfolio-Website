"use client";

import { User } from "@/types/User";
import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { createContext } from "react";

type AuthContextType = UseQueryResult<AxiosResponse<User, any>, Error>;

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext };
