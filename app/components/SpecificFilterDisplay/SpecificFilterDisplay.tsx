"use client";
import React from "react";
import classes from "./SpecificFilterDisplay.module.scss";
import ShopItem from "../ShopItem/ShopItem";
import { usePathname } from "next/navigation";
interface Props {
  filter: string;
}

const SpecificFilterDisplay: React.FC<Props> = ({ filter }) => {
  const pathname = usePathname().split("/")[1];
  return (
    <div className={classes.specific__filter__container}>
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
      <ShopItem link={`/${pathname}/shop/nike-trainers`} />
    </div>
  );
};

export default SpecificFilterDisplay;
