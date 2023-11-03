import React from "react";
import classes from "./AddOns.module.scss";
import { IoIosWater } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { PiBowlFoodFill } from "react-icons/pi";
import { motion } from "framer-motion";

const AddOns = () => {
  return (
    <div className={classes.container}>
      <h2>Get extra add-ons like:</h2>
      <motion.ul>
        <motion.li
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            delay: 0.1,
          }}
        >
          Bottle Of Water
          <IoIosWater />
        </motion.li>
        <motion.li
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            delay: 0.2,
          }}
        >
          Training Regimen
          <CgGym />
        </motion.li>
        <motion.li
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            delay: 0.3,
          }}
        >
          Diet Plan
          <PiBowlFoodFill />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default AddOns;
