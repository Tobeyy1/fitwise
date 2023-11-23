"use client";

import React, { FormEvent, useState } from "react";
import classes from "./login.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const router = useRouter();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/admin/home");
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
        transition={{
          delay: 0,
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
          delay: 0.1,
        }}
        className={classes.password__container}
      >
        <input
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          id={classes.password__input}
          className={classes.input}
        />
        <span onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
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
          delay: 0.2,
        }}
        type="submit"
      >
        Login{" "}
        <span>
          <BiSolidRightArrow />
        </span>
      </motion.button>
    </form>
  );
};

export default LoginForm;
