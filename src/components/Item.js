import { useState } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { ItemCount } from "./ItemCount";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const Item = ({ tile, className }) => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTocart = () => {
    return "hola";
  };

  const getItemDetails = (tile) => (
    <div className={classes.modalStyle}>
      <div className={classes.modalDetail}>
        <img src={tile.img} alt={tile.title} className={classes.modalImage} />
        <div>
          <h2>{tile.title}</h2>
          <p>lalalalalalalalallalalalalalalallalallalalalalallaallallalala</p>
        </div>
      </div>
      <Button onClick={handleClose}>Add to cart</Button>
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
    </div>
  );

  return (
    <GridListTile key={tile.img} className={className}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {getItemDetails(tile)}
      </Modal>
      <img src={tile.img} alt={tile.title} />
      <GridListTileBar
        title={tile.title}
        subtitle={<span>price: {tile.price}</span>}
        actionIcon={
          <button type="button" onClick={handleOpen}>
            Agregar
          </button>
        }
      />
    </GridListTile>
  );
};

const useStyles = makeStyles((theme) => ({
  modalStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "50vh",
    margin: "5vw",
    color: "green",
  },

  modalImage: {
    width: "50%",
    height: "auto",
    margin: "2vw",
  },

  modalDetail: {
    display: "flex",
  },
}));
