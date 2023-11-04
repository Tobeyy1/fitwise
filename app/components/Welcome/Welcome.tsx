"use client";

import React from "react";
import classes from "./Welcome.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
// import BG_VIDEO from "../../assets/videos/workout_welcome_screen.mp4"

const Welcome = () => {
  const videoURL = "/videos/workout_welcome_screen.mp4";
  return (
    <div className={classes.container}>
      <div className={classes.video__container}>
        <video
          src={videoURL}
          autoPlay
          muted
          loop
          // width={window.innerWidth}
          // height={window.innerHeight}
          typeof="video/mp4"
          preload="auto"
        />
      </div>
      <h1>FitWise</h1>
      <Link href="/onboarding">
        Get Started{" "}
        <span>
          <BsArrowRightShort />
        </span>
      </Link>
    </div>
  );
};

export default Welcome;
