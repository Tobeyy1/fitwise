import React, { useEffect, useState } from "react";
import classes from "./Exercise.module.scss";
import SetsAndReps from "./SetsAndReps";
import RestTimer from "./RestTimer";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

type Props = {
  exercise: ExerciseType;
  onCancel: () => void;
  currentExercise: number;
  setCurrentExercise: React.Dispatch<React.SetStateAction<number>>;
};
type ExerciseType = { name: string; sets: setDataType[] };
type setDataType = { setNumber: number; reps: number; restTime: number };

const Exercise: React.FC<Props> = ({
  exercise,
  currentExercise,
  setCurrentExercise,
  onCancel,
}) => {
  const [currentSet, setCurrentSet] = useState<number>(1);
  const [restTime, setRestTime] = useState<number>(0);

  const onCompleted = (setValue: number) => {
    if (setValue - 1 === exercise.sets.length) {
      setCurrentExercise((prev: number) => prev + 1);
    }
  };

  const onPrevious = () => {
    setCurrentSet((prev: number) => {
      if (prev - 1 === 0 && currentExercise > 1) {
        setCurrentExercise((prev: number) => prev - 1);
      }
      if (currentExercise === 1 && prev - 1 === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <motion.div
      initial={{ x: "100vw", scale: 0, opacity: 0 }}
      animate={{ x: "0vw", scale: 1, opacity: 1 }}
      exit={{ x: "-100vw", scale: 0, opacity: 0 }}
      transition={{ type: "tween" }}
      className={classes.container}
    >
      {/* <h2>Leg Day</h2> */}
      <h2 className={classes.exercise__name}>{exercise.name}</h2>{" "}
      <AnimatePresence mode="sync">
        {restTime === 0 ? (
          <SetsAndReps
            onPrevious={onPrevious}
            currentSet={currentSet - 1}
            data={exercise.sets}
            setRestTime={(time) => setRestTime(time)}
          />
        ) : (
          <RestTimer
            restTime={restTime}
            currentSet={currentSet}
            setRestTime={setRestTime}
            setCurrentSet={setCurrentSet}
            onCompleted={onCompleted}
          />
        )}
      </AnimatePresence>
      <button type="button" onClick={onCancel} className={classes.cancel}>
        Cancel Workout
      </button>
    </motion.div>
  );
};

export default Exercise;
