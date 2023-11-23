import React from "react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import classes from "./shop.module.scss";
import { motion } from "framer-motion";

interface Props {
  onChoose: (value: string) => void;
}
const GenderSelect: React.FC<Props> = ({ onChoose }) => {
  return (
    <div className={classes.modal__container}>
      <div>
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          Who are you shopping for?
        </motion.h3>
        <div className={classes.options__container}>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.1 }}
            type="button"
            onClick={() => onChoose("male")}
            className={classes.gender}
          >
            <span>
              <BsGenderMale />
            </span>
            Male
          </motion.button>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.2 }}
            type="button"
            onClick={() => onChoose("female")}
            className={classes.gender}
          >
            <span>
              <BsGenderFemale />
            </span>
            Female
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default GenderSelect;
