"use client";

import React, { useState } from "react";
import classes from "./shop.module.scss";
import GenderSelect from "./GenderSelect";
import { AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TRAINER from "../../assets/images/nike-trainer.jpg";
import AllItemsRow from "./AllItemsRow";
import SpecificFilterDisplay from "../../components/SpecificFilterDisplay/SpecificFilterDisplay";

const filters = [
  "all",
  "tops",
  "shorts",
  "gloves",
  "trainers",
  "tracksuits",
  "supplements",
];

const Shop = () => {
  const [customerGender, setCustomerGender] = useState<string>("");
  const [currentFilter, setCurrentFilter] = useState<string>(filters[0]);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  if (customerGender === "") {
    return (
      <AnimatePresence>
        <GenderSelect onChoose={setCustomerGender} />
      </AnimatePresence>
    );
  }

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
      <section className={classes.top__bar}>
        <div
          className={classes.menu}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        >
          {currentFilter}{" "}
          <span className={classes.icon}>
            <IoIosArrowDown />
          </span>
          <AnimatePresence>
            {isMenuVisible && (
              <motion.ul
                className={classes.filter__list}
                variants={variants}
                initial="initial"
                animate="animate"
                exit={"exit"}
              >
                {filters.map((filter: string) => {
                  if (filter !== currentFilter)
                    return (
                      <motion.li
                        variants={item}
                        transition={{ type: "tween" }}
                        onClick={() => {
                          setCurrentFilter(filter);
                          setIsMenuVisible(false);
                        }}
                        key={filter}
                      >
                        {filter}
                      </motion.li>
                    );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <span className={classes.icon}>
          <HiShoppingCart />
        </span>
      </section>
      <section className={classes.body}>
        {currentFilter === "all" ? (
          <>
            {filters.map((section: string) => {
              if (section !== "all")
                return (
                  <AllItemsRow
                    header={section}
                    seeAllHandler={setCurrentFilter}
                  />
                );
            })}
          </>
        ) : (
          <SpecificFilterDisplay filter={currentFilter} />
        )}
      </section>
    </div>
  );
};

export default Shop;
