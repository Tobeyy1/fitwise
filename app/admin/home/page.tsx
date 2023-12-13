"use client";
import React, { FormEvent, useState } from "react";
import classes from "./AHome.module.scss";
import { BiQrScan } from "react-icons/bi";
import { CgDatabase, CgSearch } from "react-icons/cg";
import { BsClipboardData } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { PiWarning } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { isLoadingActions } from "@/app/store/store";
import ClientDisplay from "@/app/components/ClientDisplay/ClientDisplay";
type ClientDetails = {
  firstName: string;
  lastName: string;
  username: string;
  membership: string;
  trainingRegimen: string;
  dietPlan: string;
  bottlesOfWater: number;
};

const Home = () => {
  const [isInputModalActive, setInputModalActive] = useState<boolean>(false);
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(
    null
  );
  const dispatch = useDispatch();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const clientDetails = {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe2000",
      membership: "Weekend Warrior",
      trainingRegimen: "Enabled",
      dietPlan: "Enabled",
      bottlesOfWater: 0,
    };
    dispatch(isLoadingActions.setIsLoading(true));
    setTimeout(() => {
      setClientDetails(clientDetails);
      dispatch(isLoadingActions.setIsLoading(false));
    }, 3000);
  };
  const closeHandler = () => {
    setClientDetails(null);
  };
  return (
    <div className={classes.container}>
      <AnimatePresence>
        {isInputModalActive && (
          <div className={classes.input__modal__container}>
            {" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInputModalActive(false)}
              className={classes.backdrop}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={classes.input__modal}
            >
              {" "}
              <h2>Manual Check-In</h2>{" "}
              <form id="client username" onSubmit={submitHandler}>
                {" "}
                <label htmlFor="username" className={classes.label}>
                  {" "}
                  <p>Enter Client&apos;s Username: </p>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Eg: johndoe2000"
                  />
                </label>
              </form>
              <button
                type="submit"
                form="client username"
                className={classes.form__cta}
              >
                Submit
              </button>
            </motion.div>{" "}
          </div>
        )}
      </AnimatePresence>{" "}
      <AnimatePresence>
        {clientDetails && (
          <ClientDisplay data={clientDetails} onClose={closeHandler} />
        )}{" "}
      </AnimatePresence>
      <section className={classes.top__bar}>
        <h2 className={classes.intro__text}>Welcome, Tobechukwu </h2>
      </section>{" "}
      <section className={classes.body}>
        {" "}
        <div className={classes.authenticate__user__container}>
          <button className={classes.scan__user}>
            <span className={classes.icon}>
              <BiQrScan />
            </span>{" "}
            Scan QR Code
          </button>{" "}
          <span>OR</span>{" "}
          <button
            className={classes.manual__input}
            onClick={() => setInputModalActive(true)}
          >
            {" "}
            <span className={classes.icon}>
              {" "}
              <CgSearch />{" "}
            </span>{" "}
            Input Manually{" "}
          </button>
        </div>{" "}
        <ul className={classes.admin__functions}>
          {" "}
          <li>
            <button type="button" className={classes.membership__data}>
              <span className={classes.icon}>
                <CgDatabase />{" "}
              </span>{" "}
              Membership Data{" "}
            </button>
          </li>{" "}
          <li>
            <button type="button" className={classes.view__logs}>
              <span className={classes.icon}>
                <BsClipboardData />{" "}
              </span>{" "}
              View Logs{" "}
            </button>
          </li>{" "}
          <li>
            <button type="button" className={classes.edit__pricing}>
              <span className={classes.icon}>
                <GiMoneyStack />
              </span>{" "}
              Edit Pricing
            </button>
          </li>{" "}
          <li>
            <button type="button" className={classes.customer__complaint}>
              <span className={classes.icon}>
                <PiWarning />{" "}
              </span>{" "}
              Customer Complaints{" "}
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
