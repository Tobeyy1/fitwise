"use client";

import React, { useEffect, useState } from "react";
import classes from "./Welcome.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
// import BG_VIDEO from "../../assets/videos/workout_welcome_screen.mp4"

const Welcome = () => {
  let mql = window.matchMedia("(orientation: landscape)");

  const landscapeVideoURL = "/videos/workout_welcome_screen_landscape.mp4";
  const portraitVideoURL = "/videos/workout_welcome_screen_portrait.mp4";
  const [videoURL, setVideoURL] = useState<string>(
    mql.matches ? landscapeVideoURL : portraitVideoURL
  );
  useEffect(() => {
    mql.addEventListener("change", () => {
      if (mql.matches) {
        setVideoURL(landscapeVideoURL);
      } else {
        setVideoURL(portraitVideoURL);
      }
    });
  }, [mql]);

  return (
    <div className={classes.container}>
      <div className={classes.video__container}>
        <video
          autoPlay
          muted
          loop
          // width={window.innerWidth}
          // height={window.innerHeight}

          preload="auto"
          playsInline
        >
          <source src={videoURL} type="video/mp4" />
        </video>
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
