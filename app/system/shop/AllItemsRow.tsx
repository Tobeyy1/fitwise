import React from "react";
import classes from "./shop.module.scss";
import Link from "next/link";
import Image from "next/image";
import Item from "./Item";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  header: string;
}
const AllItemsRow: React.FC<Props> = ({ header }) => {
  return (
    <div className={classes.item__row__container}>
      <div className={classes.top__row}>
        <h3>{header}</h3>

        <Link href="#">See all</Link>
      </div>
      <div className={classes.items}>
        <Item />
        <Item />
        <Item />
        <Item />

        <div className={classes.see__all}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default AllItemsRow;