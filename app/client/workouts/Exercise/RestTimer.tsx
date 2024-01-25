import React, { useEffect } from "react";
import classes from "./Exercise.module.scss";
import { motion } from "framer-motion";

type Props = {
  restTime: number;
  setRestTime: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSet: React.Dispatch<React.SetStateAction<number>>;
  currentSet: number;
  //   setCurrentExercise: React.Dispatch<React.SetStateAction<number>>;

  onCompleted: (value: number) => void;
};

const RestTimer: React.FC<Props> = ({
  restTime,
  setRestTime,
  setCurrentSet,
  currentSet,
  onCompleted,
}) => {
  useEffect(() => {
    if (restTime === 1) {
      setCurrentSet((prev: number) => {
        onCompleted(prev + 1);
        return prev + 1;
      });
    }

    if (restTime > 0) {
      const timerInterval = setInterval(() => {
        setRestTime((prev: number) => prev - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [restTime, setRestTime]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className={classes.rest__timer}
    >
      <h4>REST!!</h4>{" "}
      <p>
        <span>{restTime}</span> seconds
      </p>{" "}
    </motion.div>
  );
};

export default RestTimer;
