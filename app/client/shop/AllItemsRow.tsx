import React from "react";
import classes from "./shop.module.scss";
import Link from "next/link";
import Image from "next/image";
import Item from "./Item";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  header: string;
  seeAllHandler: (value: string) => void;
}
const AllItemsRow: React.FC<Props> = ({ header, seeAllHandler }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
      className={classes.item__row__container}
    >
      <div className={classes.top__row}>
        <h3>{header}</h3>

        <button onClick={() => seeAllHandler(header)}>See all</button>
      </div>
      <div className={classes.items}>
        <Item />
        <Item />
        <Item />
        <Item />

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className={classes.see__all}
          onClick={() => seeAllHandler(header)}
        >
          <MdOutlineKeyboardArrowRight />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AllItemsRow;
