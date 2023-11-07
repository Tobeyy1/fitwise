"use client";

import { themeActions } from "@/app/store/store";
import React, { ReactNode, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  children: ReactNode;
}
interface ThemeState {
  theme: string;
}
const AppWrapper: React.FC<Props> = ({ children }) => {
  const themeState = useSelector((state: any) => state.theme);

  const theme = themeState.theme;
  const dispatch = useDispatch();

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    if (!userTheme) return;

    dispatch(themeActions.setTheme(userTheme));
  }, []);

  return (
    <main
      style={{ backgroundColor: "var(--bg-100)" }}
      className={theme === "dark" ? "dark" : "light"}
    >
      {children}
    </main>
  );
};

export default AppWrapper;
