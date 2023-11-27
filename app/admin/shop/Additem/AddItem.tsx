"use client";
import React, { FormEvent, useState } from "react";
import classes from "./AddItem.module.scss";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { TbArrowLeft } from "react-icons/tb";
import Image from "next/image";
import CreateCategory from "./CreateCategory";
import { useRouter } from "next/navigation";
const filters = [
  "tops",
  "shorts",
  "gloves",
  "trainers",
  "tracksuits",
  "supplements",
];
type ItemDetails = {
  name: string;
  color: string;
  size: string;
  price: number;
  image: any;
};
const AddItem = () => {
  const [isCreateCategoryModalActive, setIsCreateCategoryModalActive] =
    useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [itemDetails, setItemDetails] = useState<ItemDetails>({
    name: "",
    color: "",
    size: "",
    price: 0,
    image: "",
  });
  const [currentFilter, setCurrentFilter] = useState<string>("");
  const router = useRouter();
  const variants = {
    initial: {
      backgroundColor: "transparent",
    },
    animate: {
      backgroundColor: "transparent",
      transition: { staggerChildren: 0.1, type: "tween" },
    },
    exit: {
      opacity: 0,
    },
  };

  const item = {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" },
    whileHover: { opacity: 0.5 },
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setItemDetails({
          ...itemDetails,
          image: reader.result ? reader.result : "",
        });
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleCreateCategory = (category: string) => {
    filters.push(category);
    setCurrentFilter(category);
    setIsCreateCategoryModalActive(false);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentFilter === "") {
      setIsMenuVisible(true);
      return;
    }
    const formData = new FormData(e.currentTarget);
    const itemDetails = {
      name: formData.get("name"),
      color: formData.get("color"),
      size: formData.get("size"),
      price: formData.get("price"),
    };
    console.log({ itemDetails });
    e.currentTarget.reset();
  };
  return (
    <div className={classes.container}>
      {" "}
      <AnimatePresence>
        {isCreateCategoryModalActive && (
          <CreateCategory
            onClose={setIsCreateCategoryModalActive}
            onCreate={handleCreateCategory}
          />
        )}
      </AnimatePresence>
      <section className={classes.top__bar}>
        {/* <span
          className={classes.icon}
          onClick={() => router.push("/admin/shop")}
        >
          <TbArrowLeft />
        </span> */}
        <div
          className={classes.menu}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        >
          {currentFilter ? currentFilter : "Select Category"}{" "}
          <span className={classes.icon}>
            <IoIosArrowDown />
          </span>
          <AnimatePresence>
            {isMenuVisible && (
              <motion.ul
                className={classes.filter__list}
                variants={variants}
                initial="initial"
                animate="animate"
                exit={"exit"}
              >
                {filters.map((filter: string) => {
                  if (filter !== currentFilter)
                    return (
                      <motion.li
                        variants={item}
                        transition={{ type: "tween" }}
                        onClick={() => {
                          setCurrentFilter(filter);
                          setIsMenuVisible(false);
                        }}
                        key={filter}
                      >
                        {filter}
                      </motion.li>
                    );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <span
          className={classes.icon}
          title="Create New Category"
          onClick={() => setIsCreateCategoryModalActive(true)}
        >
          <IoMdAdd />
        </span>
      </section>{" "}
      <section className={classes.body}>
        <label className={classes.image__container} htmlFor="image">
          {itemDetails.image ? (
            <Image
              src={itemDetails.image}
              alt="Item Image"
              fill
              className={classes.image}
            />
          ) : (
            <span className={classes.icon}>
              <IoMdAdd />
            </span>
          )}
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </label>{" "}
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="name">
            {" "}
            <p>Name: </p>
            <input type="text" name="name" id="name" placeholder="Item Name" />
          </label>{" "}
          <label htmlFor="color">
            {" "}
            <p>Color: </p>
            <input
              type="text"
              name="color"
              id="color"
              placeholder="Item Color"
            />
          </label>{" "}
          <label htmlFor="size">
            {" "}
            <p>Size: </p>
            <input type="text" name="size" id="size" placeholder="Item Size" />
          </label>{" "}
          <label htmlFor="price">
            {" "}
            <p>Price: </p>
            <input
              type="number"
              inputMode="numeric"
              name="price"
              id="price"
              placeholder="Item Price"
            />
          </label>{" "}
          <button type="submit">ADD ITEM</button>
        </form>
      </section>
    </div>
  );
};

export default AddItem;
