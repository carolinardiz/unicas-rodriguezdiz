import { useState } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { ItemCount } from "./ItemCount";

export const Item = ({ tile, className }) => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);

  return (
    <GridListTile key={tile.img} className={className}>
      <img src={tile.img} alt={tile.title} />
      <GridListTileBar
        title={tile.title}
        subtitle={<span>price: {tile.price}</span>}
        actionIcon={
          <ItemCount
            stock={stock}
            initial={count}
            onAdd={() => {
              setCount(count + 1);
              setStock(stock - 1);
            }}
            onRemove={() => {
              setCount(count - 1);
              setStock(stock + 1);
            }}
          />
        }
      />
    </GridListTile>
  );
};
