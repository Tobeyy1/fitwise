import React from "react";
import classes from "./ItemDisplay.module.scss";
import Image from "next/image";
import TRAINER from "../../../assets/images/nike-trainer.jpg";
import { TbArrowLeft } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { BsFullscreen } from "react-icons/bs";

const ItemDisplay = () => {
  return (
    <div className={classes.container}>
      {" "}
      <div className={classes.top__bar}>
        <span className={classes.icon}>
          {" "}
          <TbArrowLeft />{" "}
        </span>
        <h3>Shoes</h3>
        <span className={classes.icon}>
          {" "}
          <HiShoppingCart />
        </span>
      </div>
      <div className={classes.image__container}>
        <Image src={TRAINER} className={classes.image} alt="Item " fill />{" "}
        <div className={classes.full__screen}>
          <span className={classes.icon}>
            {" "}
            <BsFullscreen />
          </span>{" "}
          <p>Full Screen</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
