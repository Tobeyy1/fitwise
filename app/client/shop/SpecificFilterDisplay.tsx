import React from "react";
import classes from "./shop.module.scss";
import Item from "./Item";

interface Props {
  filter: string;
}

const SpecificFilterDisplay: React.FC<Props> = ({ filter }) => {
  return (
    <div className={classes.specific__filter__container}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default SpecificFilterDisplay;
