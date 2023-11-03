"use client";

import React, { FormEvent } from "react";
import classes from "./register.module.scss";
import { AiFillEye } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const router = useRouter();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/user-auth/subscription");
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <motion.input
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        type="text"
        name="firstName"
        placeholder="First Name"
        className={classes.input}
      />
      <motion.input
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.1,
        }}
        type="text"
        name="lastName"
        placeholder="Last Name"
        className={classes.input}
      />
      <motion.input
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
        type="email"
        name="email"
        placeholder="Email Address"
        className={classes.input}
      />
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
        className={classes.password__container}
      >
        <input
          type="password"
          name="password"
          placeholder="Password"
          id={classes.password__input}
          className={classes.input}
        />
        <span>
          <AiFillEye />
        </span>
      </motion.div>
      <motion.button
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }}
        type="submit"
      >
        Next{" "}
        <span>
          <BiSolidRightArrow />
        </span>
      </motion.button>
    </form>
  );
};

export default RegisterForm;
