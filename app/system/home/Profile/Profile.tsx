import React from "react";
import classes from "./Profile.module.scss";
import Image from "next/image";
import AVATAR from "../../../assets/images/avatar.png";
import { AiOutlineClose } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { TbLogout2, TbMoonFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "@/app/store/store";

interface Props {
  onClose: (value: boolean) => void;
}

interface ThemeState {
  theme: string;
}

const Profile: React.FC<Props> = ({ onClose }) => {
  const theme = useSelector((state: any) => state.theme.theme);

  const dispatch = useDispatch();
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
  const variants = {
    initial: {
      backgroundColor: "transparent",
    },
    animate: {
      backgroundColor: "transparent",
      transition: { staggerChildren: 0.2, type: "tween" },
    },
    exit: {
      opacity: 0,
    },
  };

  const item = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
    whileHover: { opacity: 0.5 },
  };
  return (
    <motion.div exit={{ opacity: 0 }} className={classes.container}>
      <motion.span
        initial={{ rotate: -90, opacity: 0, scale: 2.25 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: -90, opacity: 0, scale: 2.25 }}
        className={classes.close__icon}
        onClick={() => onClose(false)}
      >
        <AiOutlineClose />
      </motion.span>
      <motion.section
        initial={{
          y: "-100%",
        }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{
          type: "tween",
        }}
        className={classes.user__details}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            delay: 0.3,
          }}
          className={classes.image__container}
        >
          <Image
            src={AVATAR}
            alt="User Avatar"
            fill
            className={classes.image}
          />
        </motion.div>
        <div className={classes.name__and__membership}>
          <motion.p
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ delay: 0.5, type: "tween" }}
            className={classes.name}
          >
            Tobechukwu Awa-Agwu
          </motion.p>
          <motion.p
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ delay: 0.6, type: "tween" }}
            className={classes.membership}
          >
            Weekend Warrior
          </motion.p>
        </div>
      </motion.section>
      <motion.ul
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={classes.body}
      >
        <motion.li
          key={"details"}
          variants={item}
          transition={{ type: "tween", delay: 0.7 }}
          exit={{ opacity: 0, y: 100 }}
          className={classes.details}
        >
          <div className={classes.detail} id={classes.height}>
            <h3 className={classes.title}>Height</h3>
            <span>
              183 <span className={classes.unit}>cm</span>
            </span>
          </div>
          <div className={classes.detail} id={classes.weight}>
            <h3 className={classes.title}>Weight</h3>
            <span>
              85 <span className={classes.unit}>kg</span>
            </span>
          </div>
          <div className={classes.detail} id={classes.bmi}>
            <h3 className={classes.title}>BMI</h3>
            <span>25</span>
          </div>
        </motion.li>
        <motion.li
          key={"package__details"}
          variants={item}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "tween", delay: 0.8 }}
          className={classes.package__details}
        >
          <div className={classes.detail}>
            <h3 className={classes.title}>Bottle Of Water Left:</h3>
            <span>99</span>
          </div>
          <div className={classes.detail}>
            <h3 className={classes.title}>Workout Sessions Left:</h3>
            <span>99</span>
          </div>
        </motion.li>
        <motion.li
          key={"Qr Code"}
          variants={item}
          transition={{ type: "tween", delay: 0.9 }}
          exit={{ opacity: 0, y: 100 }}
          className={classes.qr__code}
        >
          <h3>Display Qr Code</h3>
          <span>
            <BsQrCodeScan />
          </span>
        </motion.li>
        <motion.li
          key={"Theme"}
          variants={item}
          transition={{ type: "tween", delay: 1 }}
          exit={{ opacity: 0, y: 100 }}
          className={classes.theme}
          onClick={themeHandler}
        >
          <h3>{theme === "dark" ? "Dark" : "Light"}</h3>{" "}
          <span>
            <TbMoonFilled />
          </span>
        </motion.li>
        <motion.li
          key={"Settings"}
          variants={item}
          transition={{ type: "tween", delay: 1 }}
          exit={{ opacity: 0, y: 100 }}
          className={classes.settings}
        >
          <div className={classes.setting} id={classes.password}>
            <h3>Change Password</h3>
            <span>
              <MdPassword />
            </span>
          </div>
          <div className={classes.setting} id={classes.logout}>
            <h3>Log Out</h3>
            <span>
              <TbLogout2 />
            </span>
          </div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Profile;
