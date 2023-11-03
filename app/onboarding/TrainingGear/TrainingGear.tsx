import React from "react";
import classes from "./TrainingGear.module.scss";
import { GiClothes, GiGloves, GiMedicinePills } from "react-icons/gi";
import { motion } from "framer-motion";

const TrainingGear = () => {
  return (
    <div className={classes.container}>
      <h2>Buy training gear and pick them up in the gym</h2>

      <div className={classes.gear__icons}>
        <motion.span
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            delay: 0.1,
          }}
        >
          <GiClothes />
        </motion.span>
        <motion.span
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            delay: 0.2,
          }}
        >
          <GiGloves />
        </motion.span>
        <motion.span
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            delay: 0.3,
          }}
        >
          <GiMedicinePills />
        </motion.span>
      </div>
    </div>
  );
};

export default TrainingGear;
