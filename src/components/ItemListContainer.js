import React from "react";
import TitlebarGridList from "./ItemList";

export const ItemListContainer = (props) => {
  return (
    <div>
      <TitlebarGridList products={props.products || []} />
    </div>
  );
};
