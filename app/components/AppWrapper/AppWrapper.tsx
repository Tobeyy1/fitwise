"use client";

import { themeActions } from "@/app/store/store";
import React, { ReactNode, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import QRCodeComponent from "../QRCode/QRCode";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
}
interface ThemeState {
  theme: string;
}
const AppWrapper: React.FC<Props> = ({ children }) => {
  const theme = useSelector((state: any) => state.theme.theme);

  const showQRCode = useSelector((state: any) => state.qrCode.qrCode);
  const dispatch = useDispatch();

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    if (!userTheme) return;

    dispatch(themeActions.setTheme(userTheme));
  }, [dispatch]);

  return (
    <main
      style={{ backgroundColor: "var(--bg-100)", position: "relative" }}
      className={theme === "dark" ? "dark" : "light"}
    >
      <AnimatePresence>{showQRCode && <QRCodeComponent />}</AnimatePresence>
      {children}
    </main>
  );
};

export default AppWrapper;
