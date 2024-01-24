import React, { useEffect } from "react";
import classes from "./Exercise.module.scss";

type Props = {
  restTime: number;
  setRestTime: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSet: React.Dispatch<React.SetStateAction<number>>;
  currentSet: number;
  //   setCurrentExercise: React.Dispatch<React.SetStateAction<number>>;

  onCompleted: () => void;
};

const RestTimer: React.FC<Props> = ({
  restTime,
  setRestTime,
  setCurrentSet,
  currentSet,
  onCompleted,
}) => {
  useEffect(() => {
    setCurrentSet(currentSet++);
    onCompleted();
    if (restTime > 0) {
      const timerInterval = setInterval(() => {
        setRestTime((prev: number) => prev - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [restTime, setRestTime]);

  return (
    <div className={classes.rest__timer}>
      <h4>REST!!</h4>{" "}
      <p>
        <span>{restTime}</span> seconds
      </p>{" "}
    </div>
  );
};

export default RestTimer;
