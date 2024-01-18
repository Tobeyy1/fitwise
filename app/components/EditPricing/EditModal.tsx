import React from "react";
import classes from "./EditPricing.module.scss";

import { motion } from "framer-motion";

type Props = { editDetails: EditModalDetails; onClose: () => void };
type EditModalDetails = {
  name: string;
  category: string;
  price: number;
};
const EditModal: React.FC<Props> = ({ editDetails, onClose }) => {
  return (
    <div className={classes.edit__modal}>
      <div className={classes.backdrop} onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className={classes.modal}
      >
        <h6>
          Editing {editDetails.name} {editDetails.category}{" "}
        </h6>
        <label htmlFor="newPrice">
          <span>Input new price: </span>
          <input
            type="number"
            name="newPrice"
            id="newPrice"
            placeholder={`${editDetails.price}`}
          />
        </label>
        <button type="button">Submit</button>
      </motion.div>
    </div>
  );
};

export default EditModal;
