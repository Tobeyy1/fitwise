"use client";

import React from "react";
import classes from "./QRCode.module.scss";
import QRCode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { qrCodeActions } from "@/app/store/store";
import { motion } from "framer-motion";
import { GoLightBulb } from "react-icons/go";
import { usePathname } from "next/navigation";

const QRCodeComponent = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const dispatch = useDispatch();
  let mql = window.matchMedia("(orientation: landscape)");
  const onCloseHandler = () => {
    dispatch(qrCodeActions.setQRCode(false));
  };

  const pathname = usePathname();
  console.log(mql);
  return (
    <motion.div
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: "var(--bg-100)" }}
      exit={{ backgroundColor: "transparent" }}
      className={classes.container}
      onClick={onCloseHandler}
    >
      {pathname !== "/system/home" && (
        <motion.div
          initial={{ y: "-100%", scale: 0, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: "-100%", scale: 0, opacity: 0 }}
          className={classes.tip}
        >
          <div>
            <span className={classes.icon}>
              <GoLightBulb />
            </span>
            Tip:
          </div>
          <p>
            You can find your QR Code in the Profile Section of the Home page.
          </p>
        </motion.div>
      )}
      <motion.div
        className={classes.qr__container}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <QRCode
          value={"Hello, world!"}
          size={mql.matches ? window.innerHeight - 144 : window.innerWidth - 72}
          bgColor={theme === "dark" ? "#1e1e1e" : "#fff"}
          fgColor={theme === "dark" ? "#fff" : "#1e1e1e"}
          level="L"
          // includeMargin={true}
        />
      </motion.div>
    </motion.div>
  );
};

export default QRCodeComponent;
