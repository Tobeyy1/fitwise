import React, { useState } from "react";
import classes from "./EditPricing.module.scss";
import EditModal from "./EditModal";
import { AnimatePresence } from "framer-motion";

const DUMMY_DATA = [
  {
    name: "once a week",
    price: 1000,
  },
  {
    name: "weekend warrior",
    price: 7500,
  },
  {
    name: "four times a week",
    price: 10000,
  },
  {
    name: "unlimited",
    price: 20000,
  },
];

const MembershipPricing = () => {
  const [editModalDetails, setEditModalDetails] = useState({
    active: false,
    details: {
      name: "",
      category: "membership",
      price: 0,
    },
  });
  return (
    <>
      <AnimatePresence>
        {editModalDetails.active && (
          <EditModal
            editDetails={editModalDetails.details}
            onClose={() =>
              setEditModalDetails({
                active: false,
                details: {
                  name: "",
                  category: "membership",
                  price: 0,
                },
              })
            }
          />
        )}
      </AnimatePresence>
      <ul className={classes.content}>
        {DUMMY_DATA.map((membership: any, index: number) => (
          <li
            className={classes.membership}
            key={index}
            onClick={() => {
              setEditModalDetails({
                active: true,
                details: {
                  category: "membership",
                  name: membership.name,
                  price: membership.price,
                },
              });
            }}
          >
            {" "}
            <h6>Click to edit</h6>
            <div>
              <p>{membership.name} </p> <span>₦{membership.price} </span>{" "}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MembershipPricing;
