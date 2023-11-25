import React from "react";
import classes from "./SpecificFilterDisplay.module.scss";
import ShopItem from "../ShopItem/ShopItem";
interface Props {
  filter: string;
}

const SpecificFilterDisplay: React.FC<Props> = ({ filter }) => {
  return (
    <div className={classes.specific__filter__container}>
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
      <ShopItem link="/client/shop/nike-trainers" />
    </div>
  );
};

export default SpecificFilterDisplay;
