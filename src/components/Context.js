import React from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  return <Context.Provider value={10}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
