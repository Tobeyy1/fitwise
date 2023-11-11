import React from "react";
import classes from "./shop.module.scss";
import Link from "next/link";
import Image from "next/image";
import Item from "./Item";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  header: string;
}
const AllItemsRow: React.FC<Props> = ({ header }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
      className={classes.item__row__container}
    >
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
    </motion.div>
  );
};

export default AllItemsRow;
