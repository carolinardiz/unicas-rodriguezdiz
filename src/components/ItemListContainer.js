import React from "react";
import TitlebarGridList from "./ItemList";
import { makeStyles } from "@material-ui/core/styles";

export const ItemListContainer = (props) => {
  const classes = useStyles();
  return (
    <div>
      <TitlebarGridList
        className={classes.grid}
        products={props.products || []}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "5vw",
  },
}));
