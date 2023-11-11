import React from "react";
import classes from "./shop.module.scss";
import Image from "next/image";
import TRAINER from "../../assets/images/nike-trainer.jpg";

const Item = () => {
  return (
    <div className={classes.item}>
      <div className={classes.image__container}>
        <Image src={TRAINER} alt="Item" fill className={classes.image} />
      </div>
      <p className={classes.item__name}>Nike Trainers</p>
      <span className={classes.amount}>N15,000</span>
    </div>
  );
};

export default Item;
