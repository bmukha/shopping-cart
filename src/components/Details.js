import React, { useContext } from "react";
import {useParams} from "react-router-dom"
import { Context } from "./Context";

export default function Details() {
  const { items } = useContext(Context);
  const { itemId } = useParams();
  const currItem = items.find((item) => item.id == itemId);
  return (
    <div>
      <h1>{currItem.title}</h1>
    </div>
  );
}
