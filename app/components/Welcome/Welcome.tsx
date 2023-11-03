import React from "react";
import classes from "./Welcome.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className={classes.container}>
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
