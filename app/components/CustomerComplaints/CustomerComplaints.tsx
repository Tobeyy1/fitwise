import React from "react";
import classes from "./CustomerComplaints.module.scss";
import { IoMdClose } from "react-icons/io";
import { BsTrashFill } from "react-icons/bs";
import { motion } from "framer-motion";
type Props = { onClose: () => void };

const complaints = [
  {
    header: "Login Issues",
    message:
      "I'm having trouble logging into my account. It keeps saying my credentials are incorrect.",
  },
  {
    header: "Equipment Malfunction",
    message:
      "The treadmill in the cardio section is not working. It's been out of order for a few days now.",
  },
  {
    header: "Billing Discrepancy",
    message:
      "I was charged twice for this month's membership fee. Please refund the extra charge.",
  },
  {
    header: "Class Schedule Conflict",
    message:
      "There's a scheduling conflict with my favorite class. It's now at a time that doesn't fit my schedule.",
  },
  {
    header: "Cleanliness Concerns",
    message:
      "The cleanliness of the gym, especially the locker rooms, has been subpar lately. Please address this issue.",
  },
  {
    header: "Instructor Feedback",
    message:
      "I attended a recent class, and the instructor seemed unprepared. The quality of the session was not up to the usual standard.",
  },
  {
    header: "Cancellation Difficulty",
    message:
      "I've been trying to cancel my membership, but the online cancellation process is not working. Please assist me in canceling my subscription.",
  },
  {
    header: "Equipment Unavailability",
    message:
      "Many of the weightlifting machines are frequently occupied, and it's challenging to complete my workout. Can we have more equipment available?",
  },
  {
    header: "Loud Environment",
    message:
      "The gym has become increasingly noisy, making it difficult to focus during workouts. Can measures be taken to maintain a quieter environment?",
  },
  {
    header: "Communication Issues",
    message:
      "I did not receive any notifications about the recent changes in the gym schedule. Improved communication would be appreciated.",
  },
];

const CustomerComplaints: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={classes.content__container}
      >
        <div className={classes.top__bar}>
          Client Details{" "}
          <button type="button" onClick={onClose}>
            <IoMdClose />{" "}
          </button>{" "}
        </div>
        <ul className={classes.complaints__container}>
          {complaints.map((complaint: any, index: number) => {
            return (
              <li key={index}>
                <div>
                  <h4> {complaint.header} </h4>{" "}
                  <button type="button" title="Delete Complaint">
                    <BsTrashFill />
                  </button>
                </div>{" "}
                <p className={classes.message}>{complaint.message}</p>
              </li>
            );
          })}
        </ul>
      </motion.div>{" "}
    </div>
  );
};

export default CustomerComplaints;
