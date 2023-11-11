"use client";

import React, { useState } from "react";
import classes from "./Home.module.scss";
import Image from "next/image";
import AVATAR from "../../assets/images/avatar.png";
import Profile from "./Profile/Profile";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  return (
    <div className={classes.container}>
      <AnimatePresence>
        {showProfile && <Profile onClose={setShowProfile} />}
      </AnimatePresence>
      <section className={classes.top__bar}>
        <h2 className={classes.intro__text}>Hello, User</h2>
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
        I haven&apos;t done this page yet. Check the other pages
      </section>
    </div>
  );
};

export default Home;
