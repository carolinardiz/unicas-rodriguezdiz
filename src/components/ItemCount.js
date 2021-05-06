import { makeStyles } from "@material-ui/core/styles";

export const ItemCount = ({ stock, initial, onAdd, onRemove }) => {
  const classes = useStyles();

  return (
    <div className={classes.amountControlButton}>
      <button
        onClick={() => {
          if (initial === 0) return;
          onRemove();
        }}
      >
        -
      </button>
      <p className={classes.counter}>{initial}</p>
      <button
        onClick={() => {
          if (stock === 0) return;
          onAdd();
        }}
      >
        +
      </button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  amountControlButton: {
    display: "flex",
    justifyContent: "center",
  },

  counter: {
    color: "white",
    fontSize: "large",
  },
}));
