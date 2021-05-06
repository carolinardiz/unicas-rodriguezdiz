import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Item } from "./Item";

export default function ItemList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div" className={classes.subtitle}>
            Feel Good
          </ListSubheader>
        </GridListTile>
        {props.products.map((tile, i) => (
          <Item tile={tile} key={i} className={classes.item} />
        ))}
      </GridList>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80vw",
    height: "100vh",
  },

  item: {
    width: "35vh",
    height: "35vh",
    marginBottom: "2vw",
  },

  subtitle: {
    fontSize: "xx-large",
    color: "#52b788",
    margin: "3vw",
  },
}));
