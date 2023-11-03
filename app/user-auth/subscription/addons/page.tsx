"use client";

import React, { useState } from "react";
import classes from "./Addons.module.scss";
import { IoIosWater } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { PiBowlFoodFill } from "react-icons/pi";
import SelectedAddon from "./SelectedAddon";
import BottleOfWaterModal from "./BottleOfWaterModal";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

type AddOnDetailsType = {
  numberofBottles: string | number | FormDataEntryValue | null;
  trainingRegimen: string;
  dietPlan: string;
};

const Addons = () => {
  const [isShowBottleModalActive, setIsShowBottleModalActive] =
    useState<boolean>(false);

  const [addOnDetails, setAddOnDetails] = useState<AddOnDetailsType>({
    numberofBottles: "",
    trainingRegimen: "disabled",
    dietPlan: "disabled",
  });

  const router = useRouter();

  const bottleOfWaterHandler = (numberOfBottles: FormDataEntryValue | null) => {
    setAddOnDetails({
      ...addOnDetails,
      numberofBottles: numberOfBottles,
    });
    setIsShowBottleModalActive(false);
  };

  const submitHandler = () => {
    router.push("/system/home ");
  };

  return (
    <div className={classes.container}>
      <AnimatePresence>
        {isShowBottleModalActive && (
          <BottleOfWaterModal onConfirm={bottleOfWaterHandler} />
        )}
      </AnimatePresence>
      <h2>Select any add-on to your membership</h2>
      <section className={classes.addon__container}>
        <div
          className={classes.addon}
          onClick={() => {
            if (addOnDetails.numberofBottles === "")
              setIsShowBottleModalActive(true);
          }}
        >
          <p className={classes.description}>
            Bottle of Water
            <br />
            <span>₦150 each</span>
          </p>
          <span>
            <IoIosWater />
          </span>
          {/* shows that the addon has been selected */}
          {addOnDetails.numberofBottles !== "" && (
            <SelectedAddon
              message={`${addOnDetails.numberofBottles} Bottles`}
              onDelete={() => {
                setAddOnDetails({
                  ...addOnDetails,
                  numberofBottles: "",
                });
              }}
            />
          )}
        </div>
        <div
          className={classes.addon}
          onClick={() => {
            if (addOnDetails.trainingRegimen === "disabled")
              setAddOnDetails({
                ...addOnDetails,
                trainingRegimen: "enabled",
              });
          }}
        >
          <p className={classes.description}>
            Training Regimen
            <br />
            <span>+ ₦5000</span>
          </p>
          <span>
            <CgGym />
          </span>
          {addOnDetails.trainingRegimen === "enabled" && (
            <SelectedAddon
              message={`Selected`}
              onDelete={() => {
                setAddOnDetails({
                  ...addOnDetails,
                  trainingRegimen: "disabled",
                });
              }}
            />
          )}
        </div>
        <div
          className={classes.addon}
          onClick={() => {
            if (addOnDetails.dietPlan === "disabled")
              setAddOnDetails({
                ...addOnDetails,
                dietPlan: "enabled",
              });
          }}
        >
          <p className={classes.description}>
            Diet Plan
            <br />
            <span>+ ₦4000</span>
          </p>
          <span>
            <PiBowlFoodFill />
          </span>
          {addOnDetails.dietPlan === "enabled" && (
            <SelectedAddon
              message={`Selected`}
              onDelete={() => {
                setAddOnDetails({
                  ...addOnDetails,
                  dietPlan: "disabled",
                });
              }}
            />
          )}
        </div>
      </section>
      <button className={classes.cta} onClick={submitHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Addons;
