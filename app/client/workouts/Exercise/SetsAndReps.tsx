import React from "react";
import classes from "./Exercise.module.scss";
import { numberToWords } from "@/app/helpers/helpers";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";

type Props = {
  currentSet: number;
  data: setDataType[];
  setRestTime: (value: number) => void;
};
type setDataType = { setNumber: number; reps: number; restTime: number };

const SetsAndReps: React.FC<Props> = ({ currentSet, data, setRestTime }) => {
  const completedHandler = () => {
    setRestTime(data[currentSet].restTime);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.1 }}
        className={classes.info}
      >
        <p>Use 70% of your 1 rep max</p>{" "}
        <span className={classes.icon}>
          <HiOutlineInformationCircle />{" "}
        </span>{" "}
      </motion.div>{" "}
      <motion.h6
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.2 }}
        className={classes.set__count}
      >
        <span>{numberToWords(currentSet + 1)}</span> of{" "}
        {numberToWords(data.length)} Sets
      </motion.h6>{" "}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.3 }}
        className={classes.rep__count}
      >
        <span>{data[currentSet]?.reps}</span> Reps
      </motion.p>{" "}
      <div className={classes.cta__container}>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ delay: 0.4 }}
          type="button"
          className={classes.back}
        >
          Go Back
        </motion.button>{" "}
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ delay: 0.5 }}
          type="button"
          className={classes.completed}
          onClick={completedHandler}
        >
          Completed
        </motion.button>{" "}
      </div>{" "}
    </>
  );
};

export default SetsAndReps;
