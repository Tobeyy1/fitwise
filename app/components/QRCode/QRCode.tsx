import React from "react";
import classes from "./QRCode.module.scss";
import QRCode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { qrCodeActions } from "@/app/store/store";
import { motion } from "framer-motion";

const QRCodeComponent = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(qrCodeActions.setQRCode(false));
  };
  return (
    <motion.div
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: "var(--bg-100)" }}
      exit={{ backgroundColor: "transparent" }}
      className={classes.container}
      onClick={onCloseHandler}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <QRCode
          value={"Hello, world!"}
          size={window.innerWidth - 72}
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
