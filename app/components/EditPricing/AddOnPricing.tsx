import React, { useState } from "react";
import classes from "./EditPricing.module.scss";
import EditModal from "./EditModal";
import { AnimatePresence } from "framer-motion";

const DUMMY_DATA = [
  {
    name: "bottle of water",
    price: 150,
  },
  {
    name: "training regimen",
    price: 5000,
  },
  {
    name: "diet plan",
    price: 4000,
  },
];

const AddOnPricing = () => {
  const [editModalDetails, setEditModalDetails] = useState({
    active: false,
    details: {
      name: "",
      category: "add-on",
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
                  category: "add-on",
                  price: 0,
                },
              })
            }
          />
        )}
      </AnimatePresence>
      <ul className={classes.content}>
        {DUMMY_DATA.map((addOn: any, index: number) => (
          <li
            className={classes.membership}
            key={index}
            onClick={() => {
              setEditModalDetails({
                active: true,
                details: {
                  category: "add-on",
                  name: addOn.name,
                  price: addOn.price,
                },
              });
            }}
          >
            {" "}
            <h6>Click to edit</h6>
            <div>
              <p>{addOn.name} </p> <span>₦{addOn.price} </span>{" "}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddOnPricing;
