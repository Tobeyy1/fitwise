"useState";
import React, { useState } from "react";
import classes from "./ItemDisplay.module.scss";
import { motion } from "framer-motion";

type EditedItemDetails = {
  name: string;
  color: string;
  size: string;
  price: number;
  image: any;
};

type EditInfoModalProps = {
  onClose: (value: boolean) => void;
  setEditedItemDetails: (value: EditedItemDetails) => void;
  editedItemDetails: EditedItemDetails;
  itemDetails: any;
};
type InfoModalDetails = Omit<EditedItemDetails, "image">;

const EditInfoModal: React.FC<EditInfoModalProps> = ({
  onClose,
  setEditedItemDetails,
  editedItemDetails,
  itemDetails,
}) => {
  const [infoModalDetails, setInfoModalDetails] = useState<InfoModalDetails>({
    name: "",
    color: "",
    size: "",
    price: 0,
  });
  const confirmHandler = () => {
    setEditedItemDetails({
      ...editedItemDetails,
      name: infoModalDetails.name,
      color: infoModalDetails.color,
      size: infoModalDetails.size,
      price: infoModalDetails.price,
    });
    onClose(false);
  };
  return (
    <div className={classes.edit__info__container}>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
        className={classes.backdrop}
        onClick={() => onClose(false)}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.edit__modal}
      >
        <label htmlFor="itemName">
          <p>Name: </p>{" "}
          <input
            type="text"
            name="itemName"
            id="itemName"
            placeholder={itemDetails.name}
            onChange={(e) => {
              setInfoModalDetails({
                ...infoModalDetails,
                name: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="itemColor">
          <p>Color: </p>{" "}
          <input
            type="text"
            name="itemColor"
            id="itemColor"
            placeholder={itemDetails.color}
            onChange={(e) => {
              setInfoModalDetails({
                ...infoModalDetails,
                color: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="itemSize">
          <p>Size: </p>{" "}
          <input
            type="text"
            name="itemSize"
            placeholder={itemDetails.size}
            id="itemSize"
            onChange={(e) => {
              setInfoModalDetails({
                ...infoModalDetails,
                size: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="itemPrice">
          <p>Price: </p>{" "}
          <input
            type="number"
            inputMode="numeric"
            name="itemPrice"
            id="itemPrice"
            placeholder={itemDetails.price}
            onChange={(e) => {
              setInfoModalDetails({
                ...infoModalDetails,
                price: +e.target.value,
              });
            }}
          />
        </label>{" "}
        <button type="button" className={classes.cta} onClick={confirmHandler}>
          Confirm
        </button>
      </motion.div>{" "}
    </div>
  );
};

export default EditInfoModal;
