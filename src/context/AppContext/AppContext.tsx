"use client";

import { Loader } from "@/components/Loader";
import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  loader: boolean;
  setLoader: (loading: boolean) => void;
}

// @ts-expect-error: ignore initial context creation
const AppContext = createContext<AppContextType>(null);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ loader, setLoader }}>
      {loader && <Loader />}
      {children}
    </AppContext.Provider>
  );
};
