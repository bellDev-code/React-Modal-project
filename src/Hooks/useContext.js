import React, { createContext } from "react";

export const UseContext = createContext(undefined);

export const UseContextProvider = ({ children }) => {
  return <UseContext.Provider>{children}</UseContext.Provider>;
};
