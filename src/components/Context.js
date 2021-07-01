import React, { useState, useEffect } from "react";
import { products } from "./products";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  return <Context.Provider value={{items, setCartItems, cartItems}}>{children}</Context.Provider>;
}

export { ContextProvider, Context};
