"use client";
import React, { useState } from "react";
import classes from "./AShop.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddItem from "./Additem/AddItem";
import EditItem from "./EditItem/EditItem";

const Shop = () => {
  const [objective, setObjective] = useState<string>("");
  return (
    <div className={classes.container}>
      {objective === "" && (
        <div className={classes.objective__modal}>
          <h2>What Do You Want to Do?</h2>
          <div className={classes.cta__container}>
            <button
              type="button"
              className={classes.edit__cta}
              onClick={() => setObjective("edit")}
            >
              {" "}
              <span className={classes.icon}>
                <AiOutlineEdit />
              </span>
              Edit <br /> Shop Item
            </button>
            <button
              type="button"
              className={classes.add__cta}
              onClick={() => setObjective("add")}
            >
              {" "}
              <span className={classes.icon}>
                <IoIosAddCircleOutline />
              </span>
              Add <br /> Shop Item
            </button>
          </div>{" "}
        </div>
      )}{" "}
      {objective === "edit" && <EditItem />}
      {objective === "add" && <AddItem />}{" "}
    </div>
  );
};

export default Shop;
