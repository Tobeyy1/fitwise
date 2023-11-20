import React from "react";
import classes from "./AccessDenied.module.scss";
import { HiLockClosed } from "react-icons/hi";
import { motion } from "framer-motion";

const AccessDenied = () => {
  return (
    <div className={classes.container}>
      <div
        // initial={{ scale: 0, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        className={classes.modal}
      >
        <span className={classes.icon}>
          <HiLockClosed />
        </span>
        <h3>You didn&apos;t subscribe to this package</h3>
        <button>SUBSCRIBE - N5000</button>
      </div>
    </div>
  );
};

export default AccessDenied;
