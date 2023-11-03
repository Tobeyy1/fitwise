"use client";

import React, { useState } from "react";
import classes from "./onboarding.module.scss";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import GetMembership from "./GetMembership/GetMembership";
import AddOns from "./AddOns/AddOns";
import TrainingGear from "./TrainingGear/TrainingGear";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const OnBoarding = () => {
  const [currentFeature, setCurrentFeature] = useState<number>(0);
  const features = [
    <GetMembership key={"getMembership"} />,
    <AddOns key={"addOns"} />,
    <TrainingGear key={"trainingGear"} />,
  ];

  const navigationHandler = (direction: string) => {
    if (direction === "left") {
      if (currentFeature === 0) return;
      const newIndex = (currentFeature - 1) % features.length;

      setCurrentFeature(newIndex);
    } else if (direction === "right") {
      const newIndex = (currentFeature + 1) % features.length;

      setCurrentFeature(newIndex);
    }
  };

  const skipHandler = () => {
    setCurrentFeature(2);
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>What our app has to offer!!</h1>

      <div className={classes.current__feateure__display__container}>
        <span className={currentFeature === 0 ? classes.active : ""}></span>
        <span className={currentFeature === 1 ? classes.active : ""}></span>
        <span className={currentFeature === 2 ? classes.active : ""}></span>
      </div>
      <div className={classes.features__container}>
        <AnimatePresence mode="wait">
          {features[currentFeature]}
        </AnimatePresence>
      </div>
      <div className={classes.cta__container}>
        <div className={classes.selection__buttons}>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
            }}
            type="button"
            title="Previous"
            onClick={() => navigationHandler("left")}
            className={classes.left__button}
          >
            <BsArrowLeftShort />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
            }}
            onClick={() => navigationHandler("right")}
            type="button"
            title="Next"
            className={classes.right__button}
          >
            <BsArrowRightShort />
          </motion.button>
        </div>

        {currentFeature === features.length - 1 ? (
          <Link
            href={"/user-auth/register"}
            className={classes.onboarding__cta}
          >
            Join FitWise!
          </Link>
        ) : (
          <motion.button
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.5,
            }}
            className={classes.onboarding__cta}
            onClick={skipHandler}
          >
            Skip
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default OnBoarding;
