import React from "react";
import classes from "./GetMembership.module.scss";
import { CgGym } from "react-icons/cg";
import { motion } from "framer-motion";

const GetMembership = () => {
  return (
    <motion.div
      //   initial={{ scale: 0, opacity: 0 }}
      //   animate={{ scale: 1, opacity: 1 }}
      className={classes.container}
      key={"getMembership"}
    >
      <motion.h2
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
      >
        Get a gym membership that suits your needs!!
      </motion.h2>
      <motion.span
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <CgGym />
      </motion.span>
    </motion.div>
  );
};

export default GetMembership;
