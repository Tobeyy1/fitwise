import React from "react";
import classes from "./login.module.scss";
import Link from "next/link";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={classes.container}>
      <h2>Welcome back!</h2>
      <p className={classes.register__cta}>
        Don&apos;t have an account?
        <Link href="/user-auth/register">Sign Up</Link>
      </p>
      <LoginForm />
    </div>
  );
};

export default Login;
