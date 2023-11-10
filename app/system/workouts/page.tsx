import React from "react";
import WorkoutSetup from "./WorkoutSetup/WorkoutSetup";
import classes from "./workouts.module.scss";

const Workouts = () => {
  return (
    <div className={classes.container}>
      <WorkoutSetup />
    </div>
  );
};

export default Workouts;
