import React from "react";
import classes from "./shop.module.scss";
import Image from "next/image";
import TRAINER from "../../assets/images/nike-trainer.jpg";
import Link from "next/link";

const Item = () => {
  return (
    <Link href={"/system/shop/nike-trainers"} className={classes.item}>
      <div className={classes.image__container}>
        <Image src={TRAINER} alt="Item" fill className={classes.image} />
      </div>
      <p className={classes.item__name}>Nike Trainers</p>
      <span className={classes.amount}>N15,000</span>
    </Link>
  );
};

export default Item;
