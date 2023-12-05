import React from "react";
import classes from "./LoadingSpinner.module.scss";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.container}
    >
      <div className={classes.loading__wave}>
        <div className={classes.loading__bar}></div>
        <div className={classes.loading__bar}></div>
        <div className={classes.loading__bar}></div>
        <div className={classes.loading__bar}></div>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
