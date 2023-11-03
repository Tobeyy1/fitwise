import React, { FormEvent, MouseEventHandler } from "react";
import classes from "./Addons.module.scss";
import { motion } from "framer-motion";

interface Props {
  onConfirm: (value: number) => void;
}

const BottleOfWaterModal: React.FC<Props> = ({ onConfirm }) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const selectedBottles = formData.get("bottles");
    onConfirm(selectedBottles);
    // onConfirm()
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.bottle__water__modal__container}
    >
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        className={classes.bottle__water__modal}
      >
        <h3>How many bottles of water do you need?</h3>
        <form id="BottleOfWaterForm" onSubmit={submitHandler}>
          <label htmlFor="5 Bottles">
            <span>5</span>
            <input type="radio" name="bottles" id="5 Bottles" value={5} />
          </label>{" "}
          <label htmlFor="10 Bottles">
            <span>10</span>
            <input type="radio" name="bottles" id="10 Bottles" value={10} />
          </label>{" "}
          <label htmlFor="20 Bottles">
            <span>20</span>
            <input type="radio" name="bottles" id="20 Bottles" value={20} />
          </label>{" "}
          <label htmlFor="30 Bottles">
            <span>30</span>
            <input type="radio" name="bottles" id="30 Bottles" value={30} />
          </label>
        </form>
        <button type="submit" form="BottleOfWaterForm">
          Confirm
        </button>
      </motion.div>
    </motion.div>
  );
};

export default BottleOfWaterModal;
