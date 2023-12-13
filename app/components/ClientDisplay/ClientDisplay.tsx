import React from "react";
import classes from "./ClientDisplay.module.scss";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";
import { motion } from "framer-motion";
type ClientDetails = {
  firstName: string;
  lastName: string;
  username: string;
  membership: string;
  trainingRegimen: string;
  dietPlan: string;
  bottlesOfWater: number;
};
type Props = { data: ClientDetails; onClose: () => void };
const ClientDisplay: React.FC<Props> = ({ data, onClose }) => {
  return (
    <motion.div exit={{ height: 0, opacity: 0 }} className={classes.container}>
      <div className={classes.top__bar}>
        Client Details{" "}
        <button type="button" onClick={onClose}>
          <IoMdClose />{" "}
        </button>{" "}
      </div>{" "}
      <ul className={classes.body}>
        <li className={classes.detail}>
          <span>Name: </span>{" "}
          <p>
            {data.firstName} {data.lastName}
          </p>
        </li>
        <li className={classes.detail}>
          <span>Username: </span> <p>{data.username}</p>
        </li>
        <li className={classes.detail}>
          <span>Membership: </span> <p>{data.membership}</p>
        </li>
        <li className={classes.detail}>
          <span>Training Regimen: </span> <p>{data.trainingRegimen}</p>
        </li>
        <li className={classes.detail}>
          <span>Diet Plan: </span> <p>{data.dietPlan}</p>
        </li>
        <li className={classes.detail}>
          <span>Bottles Of Water: </span> <p>{data.bottlesOfWater}</p>
        </li>
      </ul>{" "}
      <button type="button" className={classes.check__in__cta}>
        Check In <MdOutlineCheck />{" "}
      </button>
    </motion.div>
  );
};

export default ClientDisplay;
