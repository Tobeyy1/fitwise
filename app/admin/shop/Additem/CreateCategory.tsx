import React, { FormEvent } from "react";
import classes from "./AddItem.module.scss";
import { motion, AnimatePresence } from "framer-motion";
type CreateCategoryProps = {
  onClose: (value: boolean) => void;
  onCreate: (value: any) => void;
};

const CreateCategory: React.FC<CreateCategoryProps> = ({
  onClose,
  onCreate,
}) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const categoryName = formData.get("categoryName");
    if (categoryName) {
      onCreate(categoryName);
    }
  };
  return (
    <section className={classes.create__category}>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.backdrop}
        onClick={() => onClose(false)}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween" }}
        className={classes.modal}
      >
        <h2>Create Category</h2>{" "}
        <form onSubmit={submitHandler}>
          <label htmlFor="categoryName">
            <p>Name of New Category: </p>{" "}
            <input
              type="text"
              name="categoryName"
              id="categoryName"
              placeholder="Eg: Water Bottles"
            />
          </label>{" "}
          <button type="submit">CREATE CATEGORY</button>
        </form>{" "}
      </motion.div>{" "}
    </section>
  );
};

export default CreateCategory;
