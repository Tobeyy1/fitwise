"use client";

import React, { useEffect, useState } from "react";
import classes from "./Welcome.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
// import BG_VIDEO from "../../assets/videos/workout_welcome_screen.mp4"

const Welcome = () => {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  const landscapeVideoURL = "/videos/workout_welcome_screen_landscape.mp4";
  const portraitVideoURL = "/videos/workout_welcome_screen_portrait.mp4";

  useEffect(() => {
    let mql = window.matchMedia("(orientation: landscape)");
    mql.addEventListener("change", () => {
      setIsLandscape(mql.matches);
    });
    return mql.removeEventListener("change", () => {});
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.video__container}>
        <video
          autoPlay
          muted
          loop
          // width={window.innerWidth}
          // height={window.innerHeight}
          src={isLandscape ? landscapeVideoURL : portraitVideoURL}
          preload="auto"
          playsInline
        ></video>
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
