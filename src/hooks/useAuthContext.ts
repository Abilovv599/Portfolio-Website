import { AuthContext } from "@/context";
import { useContext } from "react";

function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }

  return context;
}

export { useAuthContext };
