import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./StyledLink.module.scss";

const StyledLink: FC<{ text: string }> = (props) => {
  return <Link className={classes.styled} to="/">{props.text} &rarr;</Link>;
};

export default StyledLink;
