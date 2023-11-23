import React from "react";
import classes from "./AHome.module.scss";

const Home = () => {
  return (
    <div className={classes.container}>
      <section className={classes.top__bar}>
        <h2 className={classes.intro__text}>Hello, Tobechukwu </h2>
      </section>
    </div>
  );
};

export default Home;
