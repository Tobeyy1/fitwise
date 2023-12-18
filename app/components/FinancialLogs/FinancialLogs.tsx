import React from "react";
import classes from "./FinancialLogs.module.scss";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
const logs = [
  {
    username: "john_doe",
    amount: 5000.0,
    membership: "Basic Membership",
    date: "2023-01-10",
  },
  {
    username: "fit_guru",
    amount: 7500.0,
    membership: "Premium Membership",
    date: "2023-02-05",
  },
  {
    username: "health_enthusiast",
    amount: 6000.0,
    membership: "Standard Membership",
    date: "2023-03-12",
  },
  {
    username: "active_lifestyle",
    amount: 9000.0,
    membership: "Elite Membership",
    date: "2023-04-18",
  },
  {
    username: "wellness_warrior",
    amount: 5500.0,
    membership: "Basic Membership",
    date: "2023-05-22",
  },
  {
    username: "gym_buff",
    amount: 8000.0,
    membership: "Premium Membership",
    date: "2023-06-29",
  },
  {
    username: "cardio_king",
    amount: 6500.0,
    membership: "Standard Membership",
    date: "2023-07-05",
  },
  {
    username: "strength_queen",
    amount: 10000.0,
    membership: "Elite Membership",
    date: "2023-08-11",
  },
  {
    username: "fitness_fanatic",
    amount: 7000.0,
    membership: "Premium Membership",
    date: "2023-09-17",
  },
  {
    username: "exercise_enthusiast",
    amount: 5500.0,
    membership: "Basic Membership",
    date: "2023-10-23",
  },
];

type Props = { onClose: () => void };

const FinancialLogs: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={classes.content__container}
      >
        <div className={classes.total__amount}>
          <span>₦10,000,000</span> <p>Total Income</p>
        </div>
        <ul className={classes.log__container}>
          {logs.map((log: any, index: number) => (
            <li key={index}>
              <div className={classes.top}>
                <span className={classes.username}>{log.username} </span>{" "}
                <span className={classes.amount}>₦{log.amount} </span>
              </div>{" "}
              <div className={classes.bottom}>
                <span className={classes.membership}>{log.membership} </span>{" "}
                <span className={classes.date}>{log.date} </span>
              </div>
            </li>
          ))}
        </ul>{" "}
        <button type="button" className={classes.close__cta} onClick={onClose}>
          Close <IoMdClose />{" "}
        </button>
      </motion.div>
    </div>
  );
};

export default FinancialLogs;
