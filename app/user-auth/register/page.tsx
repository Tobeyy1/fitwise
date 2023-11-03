import React from "react";
import classes from "./register.module.scss";

import Link from "next/link";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className={classes.container}>
      <h2>Join FitWize</h2>
      <p className={classes.login__cta}>
        Already a member?
        <Link href="/user-auth/login">Log In</Link>
      </p>
      <RegisterForm />
    </div>
  );
};

export default Register;
