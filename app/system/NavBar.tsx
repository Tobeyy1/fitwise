"use client";

import React from "react";
import classes from "./NavBar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidHome } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { TbBarbell } from "react-icons/tb";
import { GiMeal } from "react-icons/gi";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className={classes.nav}>
      <span className={classes.top__bar}></span>
      <ul>
        <li>
          <Link
            href="/system/home"
            className={`${classes.link} ${
              pathname === "/system/home" ? classes.active__link : ""
            }`}
          >
            <BiSolidHome />
          </Link>
        </li>
        <li>
          <Link
            href="/system/shop"
            className={`${classes.link} ${
              pathname === "/system/shop" ? classes.active__link : ""
            }`}
          >
            <HiShoppingCart />
          </Link>
        </li>
        <li>
          <Link
            href="/system/workouts"
            className={`${classes.link} ${
              pathname === "/system/workouts" ? classes.active__link : ""
            }`}
          >
            <TbBarbell />
          </Link>
        </li>
        <li>
          <Link
            href="/system/diet"
            className={`${classes.link} ${
              pathname === "/system/diet" ? classes.active__link : ""
            }`}
          >
            <GiMeal />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
