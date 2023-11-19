"use client";

import React, { useState } from "react";
import classes from "./Home.module.scss";
import Image from "next/image";
import AVATAR from "../../assets/images/avatar.png";
import Profile from "./Profile/Profile";
import { AnimatePresence } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BiQrScan } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { qrCodeActions } from "@/app/store/store";
import { useRouter } from "next/navigation";

const Home = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const showQRCode = () => {
    dispatch(qrCodeActions.setQRCode(true));
  };
  return (
    <div className={classes.container}>
      <AnimatePresence>
        {showProfile && <Profile onClose={setShowProfile} />}
      </AnimatePresence>
      <section className={classes.top__bar}>
        <h2 className={classes.intro__text}>Hello, Tobechukwu </h2>
        <div
          className={classes.image__container}
          onClick={() => setShowProfile(true)}
        >
          <Image
            src={AVATAR}
            alt="User Avatar"
            fill
            className={classes.image}
          />
        </div>
      </section>
      <section className={classes.home__body}>
        <div className={classes.notification__section}>
          <div className={classes.sign__ins__notification}>
            <div>
              <p className={classes.membership}>Weekend Warrior</p>{" "}
              <h4 className={classes.description}>
                Number Of Sign-Ins this Month
              </h4>{" "}
            </div>
            <span>99</span>{" "}
          </div>{" "}
        </div>

        {/* TRAINING AD */}
        <div
          className={classes.training}
          onClick={() => {
            router.push("/system/workouts");
          }}
        >
          <div className={classes.text__container}>
            <p className={classes.sub__text}>It&apos;s Tuesday</p>{" "}
            <h4 className={classes.main__text}>Train Chest</h4>{" "}
          </div>{" "}
          <span className={classes.icon}>
            <HiOutlineArrowRight />{" "}
          </span>{" "}
        </div>

        {/* USER DATA  */}
        <div className={classes.user__data__container}>
          <div className={classes.qr__code} onClick={showQRCode}>
            <span className={classes.icon}>
              <BiQrScan />
            </span>
            <h4>Qr Code</h4>
          </div>
          <div className={classes.progress}>
            <span className={classes.icon}>
              <BsGraphUp />
            </span>
            <h4>Track Progress</h4>
          </div>
        </div>

        {/* DIET PLAN AD  */}

        <div
          className={classes.diet}
          onClick={() => {
            router.push("/system/diet");
          }}
        >
          <h4>Eat this for Dinner</h4>
          <span className={classes.icon}>
            <HiOutlineArrowRight />{" "}
          </span>{" "}
        </div>
      </section>
    </div>
  );
};

export default Home;
