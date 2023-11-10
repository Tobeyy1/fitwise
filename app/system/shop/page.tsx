"use client";

import React, { useState } from "react";
import classes from "./shop.module.scss";
import GenderSelect from "./GenderSelect";
import { AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";

const filters = [
  "All",
  "Tops",
  "Shorts",
  "Gloves",
  "Trainers",
  "Tracksuits",
  "Supplements",
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
          {isMenuVisible && (
            <ul className={classes.filter__list}>
              {filters.map((filter: string) => {
                if (filter !== currentFilter)
                  return (
                    <li
                      onClick={() => {
                        setCurrentFilter(filter);
                        setIsMenuVisible(false);
                      }}
                      key={filter}
                    >
                      {filter}
                    </li>
                  );
              })}
            </ul>
          )}
        </div>
        <span className={classes.icon}>
          <HiShoppingCart />
        </span>
      </section>
    </div>
  );
};

export default Shop;
