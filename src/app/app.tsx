"use client";

import { FC, ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { AuthContextProvider, ThemeSwitcherContextProvider } from "@/context";

const queryClient = new QueryClient();

const App: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeSwitcherContextProvider>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          {children}
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeSwitcherContextProvider>
  );
};

export default App;
