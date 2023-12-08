import React from "react";
import classes from "./ShopItem.module.scss";
import Image from "next/image";
import TRAINER from "../../assets/images/nike-trainer.jpg";
import Link from "next/link";
type ShopItemProps = { link: string };

const ShopItem: React.FC<ShopItemProps> = ({ link }) => {
  return (
    <Link href={link} className={classes.item}>
      <div className={classes.image__container}>
        <Image
          src={TRAINER}
          alt="Item"
          fill
          className={classes.image}
          placeholder="blur"
        />
      </div>
      <p className={classes.item__name}>Nike Trainers</p>
      <span className={classes.amount}>N15,000</span>
    </Link>
  );
};

export default ShopItem;
