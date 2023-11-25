"use client";
import React, { useState } from "react";
import classes from "./EditItem.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import SpecificFilterDisplay from "@/app/components/SpecificFilterDisplay/SpecificFilterDisplay";
const categories = [
  "tops",
  "shorts",
  "gloves",
  "trainers",
  "tracksuits",
  "supplements",
];
const EditItem = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const variants = {
    initial: {
      backgroundColor: "transparent",
    },
    animate: {
      backgroundColor: "transparent",
      transition: { staggerChildren: 0.1, type: "tween" },
    },
    exit: {
      opacity: 0,
    },
  };

  const item = {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" },
    whileHover: { opacity: 0.5 },
  };
  return (
    <div className={classes.container}>
      <AnimatePresence>
        {selectedCategory === "" && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={classes.category__modal}
          >
            <h2>Select a Category</h2>{" "}
            <div className={classes.menu} onClick={() => setShowMenu(true)}>
              Select a Category{" "}
              <span className={classes.icon}>
                <IoIosArrowDown />
              </span>{" "}
              {showMenu && (
                <motion.ul
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit={"exit"}
                >
                  {categories.map((category: string) => (
                    <motion.li
                      variants={item}
                      transition={{ type: "tween" }}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowMenu(false);
                      }}
                      key={category}
                    >
                      {category}
                    </motion.li>
                  ))}{" "}
                </motion.ul>
              )}
            </div>{" "}
          </motion.div>
        )}
      </AnimatePresence>{" "}
      {selectedCategory !== "" && (
        <>
          <section className={classes.top__bar}>
            <div
              className={classes.menu}
              onClick={() => setShowMenu(!showMenu)}
            >
              {selectedCategory}{" "}
              <span className={classes.icon}>
                <IoIosArrowDown />
              </span>
              <AnimatePresence>
                {showMenu && (
                  <motion.ul
                    className={classes.filter__list}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit={"exit"}
                  >
                    {categories.map((category: string) => {
                      if (category !== selectedCategory)
                        return (
                          <motion.li
                            variants={item}
                            transition={{ type: "tween" }}
                            onClick={() => {
                              setSelectedCategory(category);
                              setShowMenu(false);
                            }}
                            key={category}
                          >
                            {category}
                          </motion.li>
                        );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </section>
          <SpecificFilterDisplay filter={selectedCategory} />
        </>
      )}
    </div>
  );
};

export default EditItem;
