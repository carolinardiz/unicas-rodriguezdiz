import React from "react";
import TitlebarGridList from "../TitlebarGridList/TitlebarGridList";

export const ItemListContainer = (props) => {
  return (
    <div>
      <TitlebarGridList products={props.products} />
    </div>
  );
};
