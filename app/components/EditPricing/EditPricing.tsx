"use client";
import React, { useState } from "react";
import classes from "./EditPricing.module.scss";
import { IoMdClose } from "react-icons/io";
import MembershipPricing from "./MembershipPricing";
import AddOnPricing from "./AddOnPricing";
import { motion } from "framer-motion";

type Props = { onClose: () => void };

const EditPricing: React.FC<Props> = ({ onClose }) => {
  const [currentCategory, setCurrentCategory] = useState<string>("membership");
  return (
    <div className={classes.container}>
      <motion.div
        className={classes.content__container}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
      >
        <header className={classes.top__bar}>
          Edit {currentCategory === "membership" ? "Membership" : "Add-On"}{" "}
          Pricing{" "}
          <button type="button" onClick={onClose}>
            <IoMdClose />{" "}
          </button>{" "}
        </header>
        <nav className={classes.pricing__navigation}>
          <span
            className={classes.active__category}
            style={
              currentCategory === "membership"
                ? { left: "2rem" }
                : { left: "50%" }
            }
          ></span>
          <ul>
            <li
              onClick={() => setCurrentCategory("membership")}
              style={currentCategory !== "membership" ? { opacity: "0.6" } : {}}
            >
              Memberships
            </li>
            <li
              onClick={() => setCurrentCategory("addOn")}
              style={currentCategory === "membership" ? { opacity: "0.6" } : {}}
            >
              Add-ons
            </li>
          </ul>
        </nav>{" "}
        {currentCategory === "membership" ? (
          <MembershipPricing />
        ) : (
          <AddOnPricing />
        )}
      </motion.div>
    </div>
  );
};

export default EditPricing;
