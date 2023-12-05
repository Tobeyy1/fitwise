"use client";
import React, { useState } from "react";
import classes from "./ItemDisplay.module.scss";
import Image from "next/image";
import TRAINER from "../../../assets/images/nike-trainer.jpg";
import { TbArrowLeft } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { BsFullscreen } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineEdit } from "react-icons/ai";
import EditInfoModal from "./EditInfoModal";
type EditedItemDetails = {
  name: string;
  color: string;
  size: string;
  price: number;
  image: any;
};
const ItemDisplay = () => {
  const [editedItemDetails, setEditedItemDetails] = useState<EditedItemDetails>(
    {
      name: "",
      color: "",
      size: "",
      price: 0,
      image: "",
    }
  );
  const [showEditInfoModal, setShoweditInfoModal] = useState<boolean>(false);
  const itemDetails = {
    name: "Nike Trainers",
    color: "blue",
    size: "45",
    price: 15000,
    image: TRAINER,
  };
  const router = useRouter();
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setEditedItemDetails({
          ...editedItemDetails,
          image: reader.result ? reader.result : "",
        });
      }
      console.log(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveChangesHandler = () => {
    router.back();
  };
  return (
    <div className={classes.container}>
      <AnimatePresence>
        {showEditInfoModal && (
          <EditInfoModal
            onClose={setShoweditInfoModal}
            setEditedItemDetails={setEditedItemDetails}
            editedItemDetails={editedItemDetails}
            itemDetails={itemDetails}
          />
        )}
      </AnimatePresence>
      <div className={classes.top__bar}>
        <span className={classes.icon} onClick={() => router.back()}>
          {" "}
          <TbArrowLeft />{" "}
        </span>
        <h3>
          {editedItemDetails.name ? editedItemDetails.name : itemDetails.name}
        </h3>
        <span className={classes.icon}>
          {" "}
          <AiOutlineEdit />
        </span>
      </div>
      <div className={classes.body}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "tween" }}
          className={classes.image__container}
        >
          <Image
            src={
              editedItemDetails.image
                ? editedItemDetails.image
                : itemDetails.image
            }
            className={classes.image}
            alt="Item "
            fill
          />{" "}
          <label htmlFor="itemImage" className={classes.item__image__cta}>
            <span className={classes.icon}>
              {" "}
              <AiOutlineEdit />
            </span>{" "}
            <p>Change Item Image</p>{" "}
            <input
              type="file"
              name="itemImage"
              id="itemImage"
              onChange={handleImageChange}
            />
          </label>
        </motion.div>{" "}
        <div className={classes.details__container}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.25, type: "tween" }}
            className={classes.item__details}
          >
            <p>Color</p>{" "}
            <span className={classes.value}>
              {editedItemDetails.color
                ? editedItemDetails.color
                : itemDetails.color}
            </span>{" "}
            <span
              className={classes.icon}
              onClick={() => setShoweditInfoModal(true)}
            >
              <AiOutlineEdit />
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.35, type: "tween" }}
            className={classes.item__details}
          >
            <p>Size</p>{" "}
            <span className={classes.value}>
              {editedItemDetails.size
                ? editedItemDetails.size
                : itemDetails.size}
            </span>{" "}
            <span
              className={classes.icon}
              onClick={() => setShoweditInfoModal(true)}
            >
              <AiOutlineEdit />
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.45, type: "tween" }}
            className={classes.item__details}
          >
            <p>Price</p>{" "}
            <span className={classes.value}>
              N
              {editedItemDetails.price
                ? editedItemDetails.price
                : itemDetails.price}
            </span>{" "}
            <span
              className={classes.icon}
              onClick={() => setShoweditInfoModal(true)}
            >
              <AiOutlineEdit />
            </span>
          </motion.div>
          <motion.button
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.55, type: "tween" }}
            type="button"
            className={classes.save__changes}
            onClick={saveChangesHandler}
          >
            SAVE CHANGES
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
