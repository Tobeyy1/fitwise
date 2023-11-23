"use client";
import React, { useState } from "react";
import classes from "./WorkoutSetup.module.scss";
import SetupModal from "./SetupModal";

const WorkoutSetup = () => {
  const setupQuestions = [
    {
      question: "What is your primary fitness goal?",
      options: [
        "Weight Loss",
        "Muscle Gain",
        "Improved Endurance",
        "Overall Health",
      ],
    },
    {
      question:
        "How would you describe your current level of physical activity?",
      options: ["Sedentary", "Moderately Active", "Highly Active"],
    },
    {
      question: " Do you have a  specific workout type?",
      options: ["Cardio", "Strength Training", "Yoga", "HIIT", "Sports"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const nextQuestionHandler = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const previousQuestionHandler = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className={classes.container}>
      <SetupModal
        question={setupQuestions[currentQuestion - 1].question}
        options={setupQuestions[currentQuestion - 1].options}
        nextQuestionHandler={nextQuestionHandler}
        previousQuestionHandler={previousQuestionHandler}
      />
    </div>
  );
};

export default WorkoutSetup;
