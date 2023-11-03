"use client";

import React from "react";
import { MdDelete } from "react-icons/md";
import classes from "./Addons.module.scss";

interface Props {
  message: string;
  onDelete: () => void;
}

const SelectedAddon: React.FC<Props> = ({ message, onDelete }) => {
  return (
    <div className={classes.selected__addon}>
      <p>{message}</p>
      <span onClick={onDelete}>
        <MdDelete />
      </span>
    </div>
  );
};

export default SelectedAddon;
