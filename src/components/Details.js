import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./Context";

export default function Details() {
  const contextValue = useContext(Context);
  const { itemId } = useParams();
  console.log(contextValue);
  console.log(itemId);
  const currItem = contextValue.items.find((item) => item.id == itemId);
  console.log(currItem);
  return (
    <div>
      <h1>{currItem.title}</h1>
      <img src={currItem.image} alt=""></img>
    </div>
  );
}
