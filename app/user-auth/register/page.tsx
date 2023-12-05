import React from "react";
import classes from "./register.module.scss";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import AUTHIMAGE from "../../assets/images/auth-page.jpg";

const Register = () => {
  return (
    <div className={classes.container}>
      {" "}
      <div className={classes.image__container}>
        <Image
          src={AUTHIMAGE}
          alt="Man Boxing"
          fill
          className={classes.image}
          placeholder="blur"
        />{" "}
        <div className={classes.blur__out}></div>
      </div>
      <div className={classes.content}>
        <h2>Join FitWize</h2>
        <p className={classes.login__cta}>
          Already a member?
          <Link href="/user-auth/login">Log In</Link>
        </p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
