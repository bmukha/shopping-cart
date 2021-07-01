import React, { useState } from "react";
import { products } from "./products";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [items, setItems] = useState(products);
  const [cartItems, setCartItems] = useState([]);

  return <Context.Provider value={{items, setCartItems, cartItems}}>{children}</Context.Provider>;
}

export { ContextProvider, Context};
