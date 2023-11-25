"use client";
import React, { useState } from "react";
import classes from "./EditItem.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
const categories = [
  "all",
  "tops",
  "shorts",
  "gloves",
  "trainers",
  "tracksuits",
  "supplements",
];
const EditItem = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <div className={classes.container}>
      {selectedCategory === "" && (
        <div className={classes.category__modal}>
          <h2>Select a Category</h2>{" "}
          <div className={classes.menu}>
            Select a Category{" "}
            <span className={classes.icon}>
              <IoIosArrowDown />
            </span>{" "}
            <ul>
              {categories.map((category: string) => (
                <li
                  onClick={() => setSelectedCategory(category)}
                  key={category}
                >
                  {category}
                </li>
              ))}{" "}
            </ul>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default EditItem;
