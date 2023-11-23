"use client";

import React from "react";
import classes from "./NavBar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidHome } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { TbBarbell } from "react-icons/tb";
import { GiMeal } from "react-icons/gi";
type NavBarProps = { role: string };

const NavBar: React.FC<NavBarProps> = ({ role }) => {
  const pathname = usePathname();

  return (
    <nav className={classes.nav}>
      <span className={classes.top__bar}></span>
      <ul>
        <li>
          <Link
            href={`/${role}/home`}
            className={`${classes.link} ${
              pathname === `/${role}/home` ? classes.active__link : ""
            }`}
          >
            <BiSolidHome />
          </Link>
        </li>
        <li>
          <Link
            href={`/${role}/shop`}
            className={`${classes.link} ${
              pathname === `/${role}/shop` ? classes.active__link : ""
            }`}
          >
            <HiShoppingCart />
          </Link>
        </li>
        <li>
          <Link
            href={`/${role}/workouts`}
            className={`${classes.link} ${
              pathname === `/${role}/workouts` ? classes.active__link : ""
            }`}
          >
            <TbBarbell />
          </Link>
        </li>
        <li>
          <Link
            href={`/${role}/diet`}
            className={`${classes.link} ${
              pathname === `/${role}/diet` ? classes.active__link : ""
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
