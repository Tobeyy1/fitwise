import React from "react";
import classes from "./login.module.scss";
import Link from "next/link";
import LoginForm from "./LoginForm";
import AUTHIMAGE from "../../assets/images/auth-page.jpg";
import Image from "next/image";

const Login = () => {
  return (
    <div className={classes.container}>
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
        <h2>Welcome back!</h2>
        <p className={classes.register__cta}>
          Don&apos;t have an account?
          <Link href="/user-auth/register">Sign Up</Link>
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
