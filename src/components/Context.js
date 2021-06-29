import React from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  return (<Context.Provider value={50000}>{children}</Context.Provider>);
};

export { ContextProvider, Context };
