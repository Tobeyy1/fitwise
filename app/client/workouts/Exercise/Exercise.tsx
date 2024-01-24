import React, { useEffect, useState } from "react";
import classes from "./Exercise.module.scss";
import SetsAndReps from "./SetsAndReps";
import RestTimer from "./RestTimer";

type Props = {
  exercise: ExerciseType;
  setCurrentExercise: React.Dispatch<React.SetStateAction<number>>;
};
type ExerciseType = { name: string; sets: setDataType[] };
type setDataType = { setNumber: number; reps: number; restTime: number };
const Exercise: React.FC<Props> = ({ exercise, setCurrentExercise }) => {
  const [currentSet, setCurrentSet] = useState<number>(1);
  const [restTime, setRestTime] = useState<number>(0);

  const onCompleted = () => {
    if (currentSet - 1 === exercise.sets.length) {
      setCurrentExercise((prev: number) => prev + 1);
    }
  };

  return (
    <>
      {/* <h2>Leg Day</h2> */}
      <h2 className={classes.exercise__name}>{exercise.name}</h2>{" "}
      {restTime === 0 ? (
        <SetsAndReps
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
      <button type="button" className={classes.cancel}>
        Cancel Workout
      </button>
    </>
  );
};

export default Exercise;
