"use client";
import React, { useState } from "react";
import WorkoutSetup from "./WorkoutSetup/WorkoutSetup";
import classes from "./workouts.module.scss";
import Exercise from "./Exercise/Exercise";

const workouts = {
  membership: "Once-a-Week Membership",
  workoutDate: "2024-01-22",
  exercises: [
    {
      name: "Squats",
      sets: [
        { setNumber: 1, reps: 12, restTime: 60 },
        { setNumber: 2, reps: 10, restTime: 45 },
        { setNumber: 3, reps: 8, restTime: 60 },
      ],
    },
    {
      name: "Bench Press",
      sets: [
        { setNumber: 1, reps: 12, restTime: 45 },
        { setNumber: 2, reps: 10, restTime: 60 },
        { setNumber: 3, reps: 8, restTime: 45 },
      ],
    },
    {
      name: "Deadlifts",
      sets: [
        { setNumber: 1, reps: 12, restTime: 60 },
        { setNumber: 2, reps: 10, restTime: 45 },
        { setNumber: 3, reps: 8, restTime: 60 },
      ],
    },
  ],
};

const Workouts = () => {
  const [setupDetails, setSetupDetails] = useState({
    active: true,
    trainingSplit: "",
  });
  const [currentExercise, setCurrentExercise] = useState<number>(1);

  const exerciseComponentArray = workouts.exercises.map(
    (exercise: any, index: number) => (
      <Exercise
        key={index}
        exercise={exercise}
        setCurrentExercise={setCurrentExercise}
      />
    )
  );

  return (
    <div className={classes.container}>
      {/* <WorkoutSetup /> */}
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
              >
                <option value="one">Once a Week</option>
                <option value="two">Two Times a Week</option>
                <option value="four">Four Times a Week</option>
                <option value="everyday">Everyday</option>
              </select>{" "}
            </label>
            <button
              onClick={() => {
                setSetupDetails({ active: false, trainingSplit: "" });
              }}
              type="button"
            >
              Start Workout
            </button>
          </form>
        </div>
      ) : (
        exerciseComponentArray[currentExercise - 1]
      )}
    </div>
  );
};

export default Workouts;
