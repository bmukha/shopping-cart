import React, { useState } from "react";
import { products } from "./products";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [items, setItems] = useState(products);
  console.log(items);
  return <Context.Provider value={items}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
