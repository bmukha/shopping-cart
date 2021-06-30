import Item from "./Item";
import React, { useContext } from "react";
import { Context } from "./Context";

export default function Shop() {
  const items = useContext(Context);
  const itemCarts = items.map((item) => (
    <Item
      id={item.id}
      title={item.title}
      url={item.image}
      description={item.description}
    />
  ));
  return (
    <div>
      I'm shop
      {itemCarts}
    </div>
  );
}
