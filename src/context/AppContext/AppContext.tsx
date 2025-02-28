"use client";

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
      {loader && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-solid"></div>
        </div>
      )}
      {children}
    </AppContext.Provider>
  );
};
