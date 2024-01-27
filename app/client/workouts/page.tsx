"use client";
import React, { useEffect, useRef, useState } from "react";
import WorkoutSetup from "./WorkoutSetup/WorkoutSetup";
import classes from "./workouts.module.scss";
import Exercise from "./Exercise/Exercise";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Workouts = () => {
  const [setupDetails, setSetupDetails] = useState({
    active: true,
    trainingSplit: "",
  });
  const [currentExercise, setCurrentExercise] = useState<number>(1);

  //Data from Store
  const workoutData = useSelector(
    (state: any) => state.workoutData.workoutData
  );

  //Select Element Ref
  const selectRef = useRef<HTMLSelectElement>(null);

  //Putting the different exercise components in an array
  const exerciseComponentArray = workoutData.exercises.map(
    (exercise: any, index: number) => (
      <Exercise
        key={index}
        exercise={exercise}
        onCancel={() => {
          setSetupDetails({
            active: true,
            trainingSplit: "",
          });
        }}
        currentExercise={currentExercise}
        setCurrentExercise={setCurrentExercise}
      />
    )
  );

  return (
    <div className={classes.container}>
      {/* <WorkoutSetup /> */}
      <AnimatePresence mode="wait">
        {setupDetails.active ? (
          <div className={classes.setup__modal}>
            <h6>Workout</h6>{" "}
            <form>
              <label htmlFor="trainingSplit">
                <p>How many days in a week do you workout?</p>
                <select
                  name="trainingSplit"
                  id="trainingSplit"
                  title="Training Split"
                  ref={selectRef}
                >
                  <option value="one">Once a Week</option>
                  <option value="two">Two Times a Week</option>
                  <option value="four">Four Times a Week</option>
                  <option value="everyday">Everyday</option>
                </select>{" "}
              </label>
              <button
                onClick={() => {
                  if (selectRef.current?.value) {
                    setSetupDetails({
                      active: false,
                      trainingSplit: selectRef.current?.value,
                    });
                  }
                }}
                type="button"
              >
                Start Workout
              </button>
            </form>
          </div>
        ) : currentExercise > workoutData.exercises.length ? (
          <div className={classes.complete__modal}>
            <h2> Congratulations!!</h2>{" "}
            <p>You&apos;ve completed your workout for today</p>
            <button
              type="button"
              onClick={() => {
                setSetupDetails({
                  active: true,
                  trainingSplit: "",
                });
                setCurrentExercise(1);
              }}
            >
              Redo Workout
            </button>
          </div>
        ) : (
          exerciseComponentArray[currentExercise - 1]
        )}
      </AnimatePresence>
    </div>
  );
};

export default Workouts;
