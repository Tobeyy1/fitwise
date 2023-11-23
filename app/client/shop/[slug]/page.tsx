"use client";
import React, { useState } from "react";
import classes from "./ItemDisplay.module.scss";
import Image from "next/image";
import TRAINER from "../../../assets/images/nike-trainer.jpg";
import { TbArrowLeft } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { BsFullscreen } from "react-icons/bs";
import { useRouter } from "next/navigation";
import FullScreenImage from "./FullScreenImage";
import { AnimatePresence, motion } from "framer-motion";

const ItemDisplay = () => {
  const [isFullScreenActive, setIsFullScreenActive] = useState<boolean>(false);
  const router = useRouter();
  const exitFullScreenHandler = () => {
    setIsFullScreenActive(false);
  };
  return (
    <div className={classes.container}>
      <AnimatePresence>
        {isFullScreenActive && (
          <FullScreenImage imageSrc={TRAINER} onExit={exitFullScreenHandler} />
        )}
      </AnimatePresence>
      <div className={classes.top__bar}>
        <span className={classes.icon} onClick={() => router.back()}>
          {" "}
          <TbArrowLeft />{" "}
        </span>
        <h3>Nike Trainers</h3>
        <span className={classes.icon}>
          {" "}
          <HiShoppingCart />
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "tween" }}
        className={classes.image__container}
      >
        <Image src={TRAINER} className={classes.image} alt="Item " fill />{" "}
        <div
          className={classes.full__screen}
          onClick={() => setIsFullScreenActive(true)}
        >
          <span className={classes.icon}>
            {" "}
            <BsFullscreen />
          </span>{" "}
          <p>Full Screen</p>
        </div>
      </motion.div>{" "}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.25, type: "tween" }}
        className={classes.item__details}
      >
        <p>Color</p> <span className={classes.value}>Blue</span>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.35, type: "tween" }}
        className={classes.item__details}
      >
        <p>Size</p> <span className={classes.value}>45</span>
      </motion.div>
      <motion.button
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ delay: 0.45, type: "tween" }}
        type="button"
        className={classes.add__to__cart}
      >
        ADD TO CART - <span>N15,000</span>
      </motion.button>
    </div>
  );
};

export default ItemDisplay;
