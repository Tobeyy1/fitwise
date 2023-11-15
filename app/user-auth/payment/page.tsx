"use client";

import React from "react";
import classes from "./payment.module.scss";
import { TbArrowLeft } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePaystackPayment } from "react-paystack";

const Payment = () => {
  const router = useRouter();

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
  };

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log("Success!");
    router.push("/system/home");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    router.push("/system/home");
  };

  const paymentHandler = () => {
    initializePayment(onSuccess, onClose);
  };
  return (
    <div className={classes.container}>
      <div className={classes.top__bar}>
        <h3>Review</h3>{" "}
        <span className={classes.icon} onClick={() => router.back()}>
          <TbArrowLeft />{" "}
        </span>
      </div>{" "}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ type: "tween" }}
        className={classes.body}
      >
        <div className={classes.detail}>
          <h4>Name</h4> <p>Tobechukwu Awa-Agwu</p>{" "}
        </div>{" "}
        <div className={classes.detail}>
          <h4>Membership</h4> <p>Four Times a Week</p>{" "}
        </div>{" "}
        <div className={classes.detail}>
          <h4>Add-ons</h4>{" "}
          <div className={classes.value__container}>
            <span className={classes.value}>30 Bottles</span>
            <span className={classes.value}>Training Regimen</span>
            <span className={classes.value}>Diet Plan</span>
          </div>
        </div>{" "}
      </motion.div>{" "}
      <motion.button
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ delay: 0.25, type: "tween" }}
        className={classes.cta}
        onClick={paymentHandler}
      >
        PAY - N20,000
      </motion.button>
    </div>
  );
};

export default Payment;
