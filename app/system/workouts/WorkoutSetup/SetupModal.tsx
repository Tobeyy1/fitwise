import React, { FormEvent } from "react";
import classes from "./WorkoutSetup.module.scss";
import { motion } from "framer-motion";

interface Props {
  question: string;
  options: string[];
  previousQuestionHandler: () => void;
  nextQuestionHandler: () => void;
}

const SetupModal: React.FC<Props> = ({
  question,
  options,
  nextQuestionHandler,
  previousQuestionHandler,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={classes.question__container}
    >
      {" "}
      <h3 className={classes.question}>{question}</h3>
      <form
        id="question__form"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          nextQuestionHandler();
        }}
      >
        {options.map((option: string, index: number) => (
          <label key={option} htmlFor={`option${index + 1}`}>
            <span>{option}</span>
            <input
              type="radio"
              name="option"
              id={`option${index + 1}`}
              value={option}
            />
          </label>
        ))}
      </form>
      <div className={classes.cta__container}>
        <button
          type="button"
          className={classes.back__cta}
          onClick={previousQuestionHandler}
        >
          Back
        </button>
        <button
          type="submit"
          form="question__form"
          className={classes.next__cta}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default SetupModal;
