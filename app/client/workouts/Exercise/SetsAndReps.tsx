import React from "react";
import classes from "./Exercise.module.scss";
import { numberToWords } from "@/app/helpers/helpers";
import { HiOutlineInformationCircle } from "react-icons/hi";

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
      <div className={classes.info}>
        <p>Use 70% of your 1 rep max</p>{" "}
        <span className={classes.icon}>
          <HiOutlineInformationCircle />{" "}
        </span>{" "}
      </div>{" "}
      <h6 className={classes.set__count}>
        <span>{numberToWords(currentSet + 1)}</span> of{" "}
        {numberToWords(data.length)} Sets
      </h6>{" "}
      <p className={classes.rep__count}>
        <span>{data[currentSet]?.reps}</span> Reps
      </p>{" "}
      <div className={classes.cta__container}>
        <button type="button" className={classes.back}>
          Go Back
        </button>{" "}
        <button
          type="button"
          className={classes.completed}
          onClick={completedHandler}
        >
          Completed
        </button>{" "}
      </div>{" "}
    </>
  );
};

export default SetsAndReps;
