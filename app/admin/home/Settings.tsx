import React from "react";
import classes from "./AHome.module.scss";
import { MdOutlineLightMode, MdPassword } from "react-icons/md";
import { TbLogout2, TbMoonFilled } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "@/app/store/store";
import { motion } from "framer-motion";
type Props = { onClose: () => void };

const Settings: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);
  const themeHandler = () => {
    let newTheme = theme;
    if (theme === "dark") {
      newTheme = "light";
    }
    if (theme === "light") {
      newTheme = "dark";
    }
    dispatch(themeActions.setTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className={classes.settings__container}>
      <div className={classes.settings__backdrop} onClick={onClose}></div>{" "}
      <motion.div className={classes.settings__modal}>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "tween", delay: 0 }}
          className={classes.setting}
        >
          <span>
            <MdPassword />{" "}
          </span>
          <p>Change Password</p>
        </motion.button>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "tween", delay: 0.1 }}
          className={classes.setting}
          onClick={themeHandler}
        >
          <span>
            {theme !== "dark" ? <TbMoonFilled /> : <MdOutlineLightMode />}{" "}
          </span>
          <p>Toggle {theme !== "dark" ? "Dark" : "Light"} Mode</p>
        </motion.button>{" "}
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "tween", delay: 0.2 }}
          className={classes.setting}
        >
          <span>
            <TbLogout2 />{" "}
          </span>
          <p>Log Out</p>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Settings;
